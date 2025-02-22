"use client";

import Image from "next/image";
import css from "./Hero.module.css";
import Logo from "../../images/Logo.png";
import Phone from "@/app/images/icons/Phone";
import Header from "../Header/Header";

export default function Hero() {
  return (
    <section className={css.heroSection}>
      <Header />
      <div className={css.heroThumb}>
        <p className={css.heroTitle}>
          національна асоціація правозахисників та адвокатів україни
        </p>
        <p className={css.heroSubTitle}>
          Всі види юридичної допомоги для захисту громадян!
        </p>
        <button className={css.heroBtn}>Швидка консультація</button>
      </div>
    </section>
  );
}
