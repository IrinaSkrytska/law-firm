"use client";

import Image from "next/image";
import css from "./Practices.module.css";
import Logo from "../../images/Logo.png";
import Phone from "@/app/images/icons/Phone";
import Header from "../Header/Header";
import BankLaw from "../../images/BankLaw.svg";
import FamilyLaw from "../../images/FamilyLaw.svg";
import CompanyLaw from "../../images/CompanyLaw.svg";
import RealEstateLaw from "../../images/RealEstateLaw.svg";
import CivilLaw from "../../images/CivilLaw.svg";
import TaxLaw from "../../images/TaxLaw.svg";
import CriminalLaw from "../../images/CriminalLaw.svg";
import MigrationLaw from "../../images/MigrationLaw.svg";
import InternationalLaw from "../../images/InternationalLaw.svg";

export default function Practices() {
  const servicesArray = [
    {
      _id: 1,
      name: "Банківське та фінансове право",
      description:
        "Супровід банківських операцій, кредитних угод та фінансових транзакцій.",
      image: BankLaw,
      alt: "Банківське та фінансове право",
    },
    {
      _id: 2,
      name: "Сімейне право",
      description:
        "Врегулювання питань розлучення, аліментів, опіки над дітьми та поділу майна.",
      image: FamilyLaw,
      alt: "Сімейне право",
    },
    {
      _id: 3,
      name: "Корпоративне право",
      description:
        "Консультації з питань реєстрації бізнесу, корпоративного управління.",
      image: CompanyLaw,
      alt: "Корпоративне право",
    },
    {
      _id: 4,
      name: "Нерухомість та будівництво",
      description:
        "Консультації з питань реєстрації бізнесу, корпоративного управління.",
      image: RealEstateLaw,
      alt: "Нерухомість та будівництво",
    },
    {
      _id: 5,
      name: "Цивільне право",
      description:
        "Допомога у майнових спорах, договірних зобов'язаннях та захисті прав власності.",
      image: CivilLaw,
      alt: "Цивільне право",
    },
    {
      _id: 6,
      name: "Податкове право",
      description:
        "Консультації з податкових питань, оптимізація податкового навантаження.",
      image: TaxLaw,
      alt: "Податкове право",
    },
    {
      _id: 7,
      name: "Кримінальне право",
      description:
        "Захист прав та інтересів клієнтів у кримінальних справах, юридичний супровід та представництво в суді.",
      image: CriminalLaw,
      alt: "Кримінальне право",
    },
    {
      _id: 8,
      name: "Міграційне право",
      description:
        "Консультації щодо оформлення віз, дозволів на проживання, громадянства та інших міграційних питань.",
      image: MigrationLaw,
      alt: "Міграційне право",
    },
    {
      _id: 9,
      name: "Міжнародне право",
      description:
        "Правова допомога у міжнародних комерційних угодах, міграційних питаннях та транскордонних спорах.",
      image: InternationalLaw,
      alt: "Міжнародне право",
    },
  ];

  return (
    <section className={css.practicesSection}>
      <h3 className={css.practicesTitle}>Сфери практики</h3>
      <p className={css.practicesSubtitle}>
        Галузі права, в яких ми надаємо кваліфіковану юридичну допомогу.
      </p>
      <ul className={css.companyServicesList}>
        {servicesArray.map((service) => (
          <li className={css.serviceItem}>
            <Image
              className={css.itemImage}
              alt={service.alt}
              src={service.image}
            />
            <p className={css.serviceItemName}>{service.name}</p>
            <p className={css.serviceItemDescription}>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
