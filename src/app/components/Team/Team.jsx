"use client";

import Image from "next/image";
import css from "./Team.module.css";
import TeamHeader from "../../images/TeamHeader.jpg";
import Header from "../Header/Header";

export default function Team({ title }) {
  return (
    <section className={css.teamSection}>
      <Header />
      <h2 className={css.teamTitle}>{title}</h2>
    </section>
  );
}
