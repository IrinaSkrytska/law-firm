"use client";

import { useState } from "react";
import Modal from "../../features/Modal/Modal";
import css from "./CallBack.module.css";

export default function CallBack() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(
    "Введіть ваш номер телефону для зворотного дзвінка:"
  );
  const [isSuccess, setIsSuccess] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (phone) => {
    if (!phone) return;

    setIsLoading(true);
    setModalContent("Надсилаємо...");
    setIsSuccess(false);

    try {
      const response = await fetch(`${BASE_URL}/send-callback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      if (response.ok) {
        setModalContent("Дякуємо, Ваш запит на зворотний дзвінок надіслано!");
        setIsSuccess(true);
      } else {
        setModalContent("Помилка при відправленні. Спробуйте ще раз.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending request:", error);
      setModalContent("Помилка з'єднання. Спробуйте ще раз.");
      setIsLoading(false);
    }
  };

  return (
    <section className={css.callBackSection}>
      <p className={css.callBackTitle}>ВИНИКЛИ ЗАПИТАННЯ В ЮРИДИЧНОМУ ПОЛІ?</p>
      <button
        className={css.callBackBtn}
        onClick={() => {
          setIsModalOpen(true);
          setIsSuccess(false);
        }}
      >
        ЗВОРОТНИЙ ДЗВІНОК
      </button>

      <Modal
        isOpen={isModalOpen}
        isLoading={isLoading}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        modalContent={modalContent}
        isSuccess={isSuccess}
      />
    </section>
  );
}
