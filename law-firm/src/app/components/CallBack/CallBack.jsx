"use client";

import css from "./CallBack.module.css";

export default function CallBack() {
  return (
    <section className={css.callBackSection}>
      <p className={css.callBackTitle}>ВИНИКЛИ ЗАПИТАННЯ В ЮРИДИЧНОМУ ПОЛІ?</p>
      <button className={css.callBackBtn}>ЗВОРОТНИЙ ДЗВІНОК</button>
    </section>
  );
}
