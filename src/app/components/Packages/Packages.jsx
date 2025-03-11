"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import css from "./Packages.module.css";
import DoneArrow from "../../images/DoneArrow.svg";

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    async function fetchPackages() {
      try {
        const response = await fetch(`${BASE_URL}/packages`);
        if (!response.ok) throw new Error("Failed to fetch packages");

        const data = await response.json();
        setPackages(data.packages);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchPackages();
  }, []);

  return (
    <section className={css.packagesSection}>
      <h2 className={css.packagesTitle}>Оберіть пакет послуг</h2>
      <p className={css.packagesSubtitle}>
        Дані пакети послуг включають повну юридичну підтримку залежно від
        обраного тарифу.
      </p>
      <ul className={css.packagesList}>
        {packages.map((item) => (
          <li className={css.packageItem} key={item._id}>
            <Image
              className={css.packageIcon}
              src={item.icon}
              alt={item.name}
              width={64}
              height={64}
            />
            <p className={css.packageName}>{item.name}</p>
            <p className={css.packagePrice}>{item.price} грн</p>
            <ul>
              {item.servicesArray.map((service, index) => (
                <li className={css.serviceItem} key={index}>
                  <Image
                    className={css.serviceIcon}
                    alt="Done"
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
