"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import css from "./Packages.module.css";
import DoneArrow from "../../images/DoneArrow.svg";

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    async function fetchPackages() {
      try {
        const response = await fetch(`${BASE_URL}/packages`);
        if (!response.ok) throw new Error("Failed to fetch packages");

        const data = await response.json();
        setPackages(data.packages);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchPackages();
  }, []);

  const handleOrderClick = (item) => {
    setSelectedPackage(item);
    setModalContent("Введіть ваш номер телефону для підтвердження замовлення:");
    setIsModalOpen(true);
  };

  const handleConfirmAndSend = async () => {
    if (!userPhoneNumber) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`${BASE_URL}/send-package`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: userPhoneNumber,
          package: selectedPackage.name,
          price: selectedPackage.price,
        }),
      });

      if (response.ok) {
        setModalContent(
          "Дякуємо, Ваш запит надіслано! Наш представник зв'яжеться з вами найближчим часом."
        );
        setUserPhoneNumber("");
      } else {
        setModalContent("Помилка при відправленні. Спробуйте ще раз.");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      setModalContent("Помилка з'єднання. Спробуйте ще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={css.packagesSection}>
      <h2 className={css.packagesTitle}>Оберіть пакет послуг</h2>
      <p className={css.packagesSubtitle}>
        Дані пакети послуг включають повну юридичну підтримку залежно від
        обраного тарифу.
      </p>
      <ul className={css.packagesList}>
        {packages.map((item) => (
          <li className={css.packageItem} key={item._id}>
            <Image
              className={css.packageIcon}
              src={item.icon}
              alt={item.name}
              width={64}
              height={64}
            />
            <p className={css.packageName}>{item.name}</p>
            <p className={css.packagePrice}>{item.price}</p>
            <ul>
              {item.servicesArray.map((service, index) => (
                <li className={css.serviceItem} key={index}>
                  <Image
                    className={css.serviceIcon}
                    alt="Done"
                    width={24}
                    height={24}
                    src={DoneArrow}
                  />
                  {service}
                </li>
              ))}
            </ul>
            <button
              className={css.itemBtn}
              onClick={() => handleOrderClick(item)}
            >
              Замовити
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {isModalOpen && (
        <div className={css.modal}>
          <div className={css.modalContent}>
            <button
              className={css.closeIcon}
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <p className={css.statusMessage}>{modalContent}</p>

            {!isSubmitting && modalContent.includes("Введіть ваш номер") && (
              <>
                <input
                  type="tel"
                  className={css.input}
                  placeholder="+380XXXXXXXXX"
                  value={userPhoneNumber}
                  onChange={(e) => setUserPhoneNumber(e.target.value)}
                  required
                />
                <button
                  className={css.submitBtn}
                  onClick={handleConfirmAndSend}
                >
                  Надіслати
                </button>
              </>
            )}

            {isSubmitting && <p>Надсилання...</p>}
          </div>
        </div>
      )}
    </section>
  );
}
