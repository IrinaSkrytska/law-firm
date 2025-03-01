"use client";

import Image from "next/image";
import css from "./Packages.module.css";
import Logo from "../../images/Logo.png";
import BusinessLawService from "../../images/BusinessLawService.svg";
import BankLawService from "../../images/BankLawService.svg";
import RealEstateLawService from "../../images/RealEstateLawService.svg";
import DoneArrow from "../../images/DoneArrow.svg";

export default function Packages() {
  const packagesArray = [
    {
      _id: 1,
      name: "Бізнес-право",
      price: "$500/місяць",
      servicesArray: ["20 годин у суді", "25 годин зустрічей", "100% успіх"],
      icon: BusinessLawService,
      alt: "бізнес-право",
    },
    {
      _id: 2,
      name: "Банківське право",
      price: "$450/місяць",
      servicesArray: ["20 годин у суді", "25 годин зустрічей", "100% успіх"],
      icon: BankLawService,
      alt: "банківське право",
    },
    {
      _id: 3,
      name: "Нерухомість",
      price: "$700/місяць",
      servicesArray: ["20 годин у суді", "25 годин зустрічей", "100% успіх"],
      icon: RealEstateLawService,
      alt: "нерухомість",
    },
  ];

  return (
    <section className={css.packagesSection}>
      <h2 className={css.packagesTitle}>Оберіть пакет послуг</h2>
      <p className={css.packagesSubtitle}>
        Дані пакети послуг включають повну юридичну підтримку залежно від
        обраного тарифу.
      </p>
      <ul className={css.packagesList}>
        {packagesArray.map((item) => (
          <li className={css.packageItem}>
            <Image className={css.packageIcon} src={item.icon} />
            <p className={css.packageName}>{item.name}</p>
            <p className={css.packagePrice}>{item.price}</p>
            <ul>
              {item.servicesArray.map((service) => (
                <li className={css.serviceItem}>
                  <Image
                    className={css.serviceIcon}
                    alt={service.alt}
                    width={24}
                    height={24}
                    src={DoneArrow}
                  />
                  {service}
                </li>
              ))}
            </ul>
            <button className={css.itemBtn}>Замовити</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
