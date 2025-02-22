"use client";

import css from "./Experience.module.css";
import Image from "next/image";
import ExperienceImage from "../../images/ExperienceImage.jpg";

export default function Experience() {
  const casesArray = [
    {
      _id: 1,
      name: "Успішні кейси",
      percentage: "98",
    },
    {
      _id: 2,
      name: "Фінансові справи",
      percentage: "96",
    },
    {
      _id: 3,
      name: "Військове право",
      percentage: "95",
    },
  ];

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
        <div>
          <p className={css.experienceTitle}>Наш досвід - Ваш захист!</p>
          <p className={css.experienceDescription}>
            Ми надаємо надійний правовий захист і професійний супровід у всіх
            юридичних питаннях. Наш досвід і глибокі знання допоможуть вам
            знайти найкраще рішення у складних ситуаціях.
          </p>
          <ul>
            {casesArray.map((item) => (
              <li className={css.caseItem} key={item._id}>
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
