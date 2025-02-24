"use client";

import { useState } from "react";
import css from "./ContactForm.module.css";
import Image from "next/image";
import Logo from "../../images/Logo.png";

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    { _id: "service1", label: "Цивільне право" },
    { _id: "service2", label: "Сімейне право" },
    { _id: "service3", label: "Корпоративне право" },
    { _id: "service4", label: "Нерухомість та будівництво" },
    { _id: "service5", label: "Цивільне право" },
    { _id: "service6", label: "Податкове право" },
  ];

  const handleSelect = (_id) => {
    setSelectedService(_id);
    setIsDropdownOpen(false);
  };

  return (
    <div className={css.formSection}>
      <form className={css.form}>
        <div className={css.formRow}>
          <div className={css.formGroup}>
            <label className={css.label} for="name">
              Ім'я
            </label>
            <input
              // placeholder="Name"
              className={css.input}
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className={css.formGroup}>
            <label className={css.label} for="phone">
              Телефон
            </label>
            <input
              className={css.input}
              type="tel"
              id="phone"
              name="phone"
              required
            />
          </div>
        </div>

        <div className={css.formRow}>
          <div className={css.formGroup}>
            <label className={css.label} for="email">
              Email
            </label>
            <input
              className={css.input}
              type="email"
              id="email"
              name="email"
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
                {selectedService
                  ? services.find((s) => s._id === selectedService)?.label
                  : "Оберіть послугу"}
              </div>
              {isDropdownOpen && (
                <ul className={css.dropdownList}>
                  {services.map((service) => (
                    <li
                      key={service._id}
                      onClick={() => handleSelect(service._id)}
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
              _id={selectedService}
              required
            />
          </div>
        </div>

        <div className={css.formGroup}>
          <label className={css.label} for="subject">
            Тема
          </label>
          <input
            className={css.input}
            type="text"
            id="subject"
            name="subject"
            required
          />
        </div>

        <label className={css.label} for="message">
          Повідомлення
        </label>
        <textarea
          className={css.textarea}
          id="message"
          name="message"
          // rows="4"
          required
        ></textarea>

        <button className={css.submitBtn} type="submit">
          Надіслати запит на консультацію
        </button>
      </form>
    </div>
  );
}
