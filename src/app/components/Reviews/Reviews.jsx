"use client";

import { useEffect, useState } from "react";
import css from "./Reviews.module.css";
import Image from "next/image";
import CustomerImage from "../../images/CustomerImage.jpg";
import Carousel from "@/app/features/Carousel/Carousel";

export default function Reviews() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(`${BASE_URL}/reviews`);
        if (!response.ok) throw new Error("Failed to fetch reviews");

        const data = await response.json();
        setReviews(data); // Store fetched reviews
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

  const casesArray = [
    {
      _id: 1,
      name: "Харченко Борис",
      text: "Професійний підхід та високий рівень обслуговування! Завдяки команді юристів ми швидко вирішили складне юридичне питання. Вдячні за підтримку та чіткість у роботі.",
      role: "Власник кав’ярні Coffee Room",
      image: CustomerImage,
    },
    {
      _id: 2,
      name: "Харченко Борис",
      text: "Професійний підхід та високий рівень обслуговування! Завдяки команді юристів ми швидко вирішили складне юридичне питання. Вдячні за підтримку та чіткість у роботі.",
      role: "Власник кав’ярні Coffee Room",
      image: CustomerImage,
    },
    {
      _id: 3,
      name: "Харченко Борис",
      text: "Професійний підхід та високий рівень обслуговування! Завдяки команді юристів ми швидко вирішили складне юридичне питання. Вдячні за підтримку та чіткість у роботі.",
      role: "Власник кав’ярні Coffee Room",
      image: CustomerImage,
    },
  ];

  return (
    <section className={css.reviewsSection}>
      <p className={css.reviewsTitle}>Що Кажуть Наші Клієнти</p>
      <Carousel slides={casesArray} options={options} />
    </section>
  );
}
