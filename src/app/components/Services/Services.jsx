"use client";

import Image from "next/image";
import css from "./Services.module.css";
import Logo from "../../images/Logo.png";
import Phone from "@/app/images/icons/Phone";
import Header from "../Header/Header";

export default function Services() {
  return (
    <section className={css.servicesSection}>
      <Header />
      <h2 className={css.servicesTitle}>Послуги</h2>
    </section>
  );
}
