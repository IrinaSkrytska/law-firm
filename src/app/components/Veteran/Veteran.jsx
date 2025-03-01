"use client";

import css from "./Veteran.module.css";

export default function Veteran() {
  return (
    <section className={css.veteranSection}>
      <h3 className={css.veteranTitle}>
        Заява для допомоги військовополоненим
      </h3>
      <a
        href="../../files/application.docx"
        download
        className={css.downloadButton}
      >
        Завантажити
      </a>
    </section>
  );
}
