"use client";

import { useEffect, useState } from "react";
import css from "./Experience.module.css";
import Image from "next/image";
import ExperienceImage from "../../images/ExperienceImage.jpg";

export default function Experience() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cases`);
        if (!response.ok) {
          throw new Error("Failed to fetch cases");
        }
        const data = await response.json();

        if (!Array.isArray(data.cases)) {
          throw new Error("Invalid API response format");
        }

        setCases(data.cases);
      } catch (error) {
        console.error("Error fetching cases:", error);
      }
    };

    fetchCases();
  }, []);

  return (
    <section className={css.experienceSection}>
      <div className={css.experienceThumb}>
        <Image
          className={css.experienceImage}
          width={728}
          height={570}
          alt="наш досвід"
          src={ExperienceImage}
        />
        <div className={css.experienceDescriptionThumb}>
          <p className={css.experienceTitle}>Наш досвід - Ваш захист!</p>
          <p className={css.experienceDescription}>
            Ми надаємо надійний правовий захист і професійний супровід у всіх
            юридичних питаннях. Наш досвід і глибокі знання допоможуть вам
            знайти найкраще рішення у складних ситуаціях.
          </p>
          <ul className={css.casesList}>
            {cases.map((item) => (
              <li className={css.caseItem} key={item._id || item.name}>
                <p className={css.itemTitle}>{item.name}</p>
                <div className={css.itemProgressThumb}>
                  <div className={css.itemProgressContainer}>
                    <div
                      style={{ width: `${item.percentage}%` }}
                      className={css.itemProgressLine}
                    ></div>
                  </div>
                  <p className={css.itemPercentageText}>{item.percentage}%</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
