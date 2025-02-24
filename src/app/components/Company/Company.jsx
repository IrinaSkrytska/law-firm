"use client";

import Image from "next/image";
import css from "./Company.module.css";
import AboutCompany from "../../images/AboutCompany.png";
import BankLaw from "../../images/BankLaw.svg";
import FamilyLaw from "../../images/FamilyLaw.svg";
import CompanyLaw from "../../images/CompanyLaw.svg";
import RealEstateLaw from "../../images/RealEstateLaw.svg";
import CivilLaw from "../../images/CivilLaw.svg";
import TaxLaw from "../../images/TaxLaw.svg";

export default function Company() {
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
  ];

  return (
    <section className={css.companySection}>
      <div className={css.companyDescriptionThumb}>
        <div className={css.companyTitleThumb}>
          <p className={css.companyTitle}>Про компанію:</p>
          <p className={css.companyTitleHighlighted}>
            Національна асоціація правозахисників та адвокатів України
          </p>
          <p className={css.companySubtitle}>
            — це сучасна юридична спільнота, що об’єднує досвідчених фахівців,
            орієнтованих на надання якісних правових послуг для фізичних та
            юридичних осіб. Ми працюємо на засадах індивідуального підходу до
            кожного Клієнта, забезпечуючи ефективний захист прав і законних
            інтересів. Наш успіх ґрунтується на глибоких знаннях законодавства,
            багаторічному практичному досвіді та відповідальності за результат.
          </p>
        </div>
        <Image className={css.aboutImage} src={AboutCompany} />
      </div>
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
