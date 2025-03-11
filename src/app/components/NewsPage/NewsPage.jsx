"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import css from "./NewsPage.module.css";
import Link from "next/link";
import ArrowRight from "../../images/ArrowRight.svg";
import { slugify } from "transliteration";

export default function NewsPage() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(`${BASE_URL}/news`);
        if (!response.ok) throw new Error("Failed to fetch news");

        const data = await response.json();

        const newsWithSlugs = data.news.map((item) => ({
          ...item,
          slug: slugify(item.name, { lowercase: true, separator: "-" }),
        }));

        setNews(newsWithSlugs);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchNews();
  }, []);

  return (
    <section className={css.newsSection}>
      <p className={css.newsTitle}>Новини</p>
      <p className={css.newsSubtitle}>
        Слідкуйте за актуальними новинами юридичного світу
      </p>
      <ul className={css.itemsList}>
        {news.map((item) => (
          <li className={css.item} key={item._id}>
            <Image
              className={css.newsItemImage}
              width={300}
              height={280}
              src={item.image}
              alt={item.name}
            />
            <p className={css.itemDate}>
              {item.month} {item.date}
            </p>
            <p className={css.itemName}>{item.name}</p>
            <Link className={css.itemLink} href={`/news/${item.slug}`}>
              Читати
              <Image className={css.arrow} src={ArrowRight} alt="arrow" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
