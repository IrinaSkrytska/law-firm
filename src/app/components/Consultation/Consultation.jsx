"use client";

import css from "./Consultation.module.css";
import Image from "next/image";
import Logo from "../../images/Logo.png";
import ContactForm from "../ContactForm/ContactForm";

export default function Consultation() {
  return (
    <section className={css.consultationSection}>
      <div className={css.consultationThumb}>
        <div className={css.consultationTextThumb}>
          <Image className={css.logo} src={Logo} />
          <p className={css.consultationTitle}>
            Замовте <span className={css.highlightedText}>безкоштовну </span>
            консультацію
          </p>
          <p className={css.consultationText}>
            Ми допоможемо вам знайти ефективне юридичне рішення. Залиште свої
            дані, і наші фахівці зв'яжуться з вами найближчим часом.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
