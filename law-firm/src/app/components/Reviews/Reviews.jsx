"use client";

import css from "./Reviews.module.css";
import Image from "next/image";
import CustomerImage from "../../images/CustomerImage.jpg";
import Quotes from "../../images/Quotes.svg";

export default function Reviews() {
  const casesArray = [
    {
      _id: 1,
      name: "Харченко Борис",
      text: "Професійний підхід та високий рівень обслуговування! Завдяки команді юристів ми швидко вирішили складне юридичне питання. Вдячні за підтримку та чіткість у роботі.",
      role: "Власник кав’ярні Coffee Room",
      image: CustomerImage,
    },
    // {
    //   _id: 2,
    //   name: "Фінансові справи",
    //   percentage: "96",
    // },
    // {
    //   _id: 3,
    //   name: "Військове право",
    //   percentage: "95",
    // },
  ];

  return (
    <section className={css.reviewsSection}>
      <p className={css.reviewsTitle}>Що Кажуть Наші Клієнти</p>
      <div className={css.reviewThumb}>
        <div className={css.reviewTextThumb}>
          <Image
            className={css.quotesIcon}
            width={40}
            height={40}
            src={Quotes}
          />
          <div className={css.line}></div>
          <div>
            <p className={css.reviewText}>
              "Професійний підхід та високий рівень обслуговування! Завдяки
              команді юристів ми швидко вирішили складне юридичне питання.
              Вдячні за підтримку та чіткість у роботі."
            </p>
            <p className={css.reviewName}>Харченко Борис</p>
            <p className={css.reviewRole}>Власник кав’ярні Coffee Room</p>
          </div>
        </div>
        <Image
          width={306}
          height={248}
          className={css.reviewImage}
          src={CustomerImage}
        />
      </div>
    </section>
  );
}
