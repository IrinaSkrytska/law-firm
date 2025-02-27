"use client";

import Image from "next/image";
import css from "./News.module.css";
import NewsImage from "../../images/NewsImage.jpg";
import Link from "next/link";
import ArrowRight from "../../images/ArrowRight.svg";

export default function News() {
  const newsArray = [
    {
      _id: 1,
      month: "Лютий",
      date: "01.2025",
      name: "Зміни у законі для бронювання",
      link: "/",
      image: NewsImage,
    },
    {
      _id: 2,
      month: "Лютий",
      date: "05.2025",
      name: "Що робити, якщо страхова не сплатить?",
      link: "/",
      image: NewsImage,
    },
    {
      _id: 3,
      month: "Лютий",
      date: "10.2025",
      name: "Зміни соціальних виплат у 2025 році",
      link: "/",
      image: NewsImage,
    },
  ];

  return (
    <section className={css.newsSection}>
      <p className={css.newsTitle}>Новини</p>
      <p className={css.newsSubtitle}>
        Слідкуйте за актуальними новинами юридичного світу
      </p>
      <ul className={css.itemsList}>
        {newsArray.map((item) => (
          <li className={css.item}>
            <Image
              className={css.newsItemImage}
              //   width={416}
              height={280}
              src={item.image}
            />
            <p className={css.itemDate}>
              {item.month} {item.date}
            </p>
            <p className={css.itemName}>{item.name}</p>
            <Link className={css.itemLink} href={item.link}>
              Читати
              <Image className={css.arrow} src={ArrowRight} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
