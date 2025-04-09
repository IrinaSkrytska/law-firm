"use client";

import { useEffect, useState } from "react";
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
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${BASE_URL}/services`);
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setServices(data.services);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

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
        {services.map((service) => (
          <li key={service.id} className={css.serviceItem}>
            <Image
              className={css.itemImage}
              alt={service.name}
              src={service.image}
              width={80}
              height={80}
            />
            <p className={css.serviceItemName}>{service.name}</p>
            <p className={css.serviceItemDescription}>{service.description}</p>
          </li>
        ))}
      </ul>
      <p className={css.veteransText}>
        Для військових послуги надаються безкоштовно!
      </p>
    </section>
  );
}
