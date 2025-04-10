"use client";

import { useEffect, useState } from "react";
import css from "./Reviews.module.css";
import Image from "next/image";
import CustomerImage from "../../images/CustomerImage.jpg";
import Carousel from "@/app/features/Carousel/Carousel";
import ReviewModal from "@/app/features/ReviewModal/ReviewModal";

export default function Reviews() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [reviews, setReviews] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("Залиште Ваш відгук:");
  const [isSuccess, setIsSuccess] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData) => {
    if (!formData) return;

    setIsLoading(true);
    setModalContent("Надсилаємо...");
    setIsSuccess(false);

    try {
      const response = await fetch(`${BASE_URL}/send-review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      console.log("response", { formData });

      if (response.ok) {
        setModalContent("Дякуємо, Ваш відгук надіслано на модерацію!");
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

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(`${BASE_URL}/reviews`);
        if (!response.ok) throw new Error("Failed to fetch reviews");

        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchReviews();
  }, []);

  const options = {
    align: "center",
    containScroll: false,
  };

  return (
    <section className={css.reviewsSection}>
      <p className={css.reviewsTitle}>Що Кажуть Наші Клієнти</p>
      <Carousel slides={reviews} options={options} />
      <button
        className={css.callBackBtn}
        onClick={() => {
          setIsModalOpen(true);
          setIsSuccess(false);
        }}
      >
        ЗАЛИШИТИ ВІДГУК
      </button>
      <ReviewModal
        isOpen={isModalOpen}
        isLoading={isLoading}
        setIsModalOpen={setIsModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        modalContent={modalContent}
        isSuccess={isSuccess}
      />
    </section>
  );
}
