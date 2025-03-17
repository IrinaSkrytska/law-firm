"use client";

import { useState } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    subject: "",
    message: "",
  });

  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    { _id: "service1", label: "Цивільне право" },
    { _id: "service2", label: "Сімейне право" },
    { _id: "service3", label: "Корпоративне право" },
    { _id: "service4", label: "Нерухомість та будівництво" },
    { _id: "service5", label: "Цивільне право" },
    { _id: "service6", label: "Податкове право" },
  ];

  const handleSelect = (serviceLabel) => {
    setSelectedService(serviceLabel);
    setFormData({ ...formData, service: serviceLabel });
    setIsDropdownOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch(`${BASE_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage("ok");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          subject: "",
          message: "",
        });
        setSelectedService("");
        setIsModalOpen(true);
      } else {
        setStatusMessage("Помилка при відправленні запиту. Спробуйте ще раз.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("Помилка з'єднання. Спробуйте ще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.formSection}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.formRow}>
          <div className={css.formGroup}>
            <label className={css.label} htmlFor="name">
              Ім'я
            </label>
            <input
              className={css.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={css.formGroup}>
            <label className={css.label} htmlFor="phone">
              Телефон
            </label>
            <input
              className={css.input}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={css.formRow}>
          <div className={css.formGroup}>
            <label className={css.label} htmlFor="email">
              Email
            </label>
            <input
              className={css.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={css.formGroup}>
            <label className={css.label}>Послуга</label>
            <div
              className={css.customDropdown}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className={css.dropdownSelected}>
                {selectedService ? selectedService : "Оберіть послугу"}
              </div>
              {isDropdownOpen && (
                <ul className={css.dropdownList}>
                  {services.map((service) => (
                    <li
                      key={service._id}
                      onClick={() => handleSelect(service.label)}
                    >
                      {service.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input
              type="hidden"
              name="service"
              value={selectedService}
              required
            />
          </div>
        </div>

        <div className={css.formGroup}>
          <label className={css.label} htmlFor="subject">
            Тема
          </label>
          <input
            className={css.input}
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <label className={css.label} htmlFor="message">
          Повідомлення
        </label>
        <textarea
          className={css.textarea}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button className={css.submitBtn} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Відправка..." : "Надіслати запит на консультацію"}
        </button>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className={css.modal}>
          <div className={css.modalContent}>
            <button className={css.closeIcon} onClick={closeModal}>
              ×
            </button>
            {statusMessage === "ok" ? (
              <>
                <p className={css.statusMessage}>
                  Дякуємо, Ваш лист надіслано!
                </p>
                <p className={css.statusMessage}>
                  Наш представник ознайомиться з ним та зв`яжеться з Вами.
                </p>
              </>
            ) : (
              <p className={css.statusMessage}>{statusMessage}</p>
            )}

            <button className={css.closeBtn} onClick={closeModal}>
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
