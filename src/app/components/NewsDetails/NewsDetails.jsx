"use client";

import Image from "next/image";
import css from "./NewsDetails.module.css";
import Link from "next/link";
import ArrowRight from "../../images/ArrowRight.svg";

export default function NewsDetails({ newsItem }) {
  console.log("newsItem:", newsItem);

  return (
    <section className={css.newsSection}>
      <Link href="/news" className={css.backButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={css.backIcon}
        >
          <polyline points="15 18 9 12 15 6" />
          <line x1="9" y1="12" x2="21" y2="12" />
        </svg>

        <span>Назад</span>
      </Link>

      <p className={css.newsTitle}>{newsItem.name}</p>
      <div className={css.newsThumb}>
        <Image
          className={css.newsImage}
          width={400}
          height={400}
          src={newsItem.image}
        />
        <ul>
          {newsItem.description &&
            newsItem.description.map((item) => (
              <li className={css.newsItem}>{item}</li>
            ))}
        </ul>
      </div>
    </section>
  );
}
