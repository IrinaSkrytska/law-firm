"use client";

import css from "./Partners.module.css";
import Image from "next/image";
import ISHR from "../../images/ISHR.png";
import VeteranPartner from "../../images/VeteranPartner.png";

export default function Partners() {
  const partnersArray = [
    {
      _id: 1,
      image: ISHR,
      name: "Міжнародне товариство прав людини",
    },
    {
      _id: 2,
      image: VeteranPartner,
      name: "всеукраїнська ветеранська організація захисників україни",
    },
  ];

  return (
    <section className={css.partnersSection}>
      <h3 className={css.partnersTitle}>Наші партнери</h3>
      <ul className={css.partnersList}>
        {partnersArray.map((partner) => (
          <li className={css.partnerItem}>
            <Image
              className={css.partnerImage}
              height={280}
              width={320}
              src={partner.image}
            />
            <p className={css.partnerName}>{partner.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
