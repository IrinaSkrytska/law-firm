"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import css from "./Practices.module.css";

export default function Practices() {
  const [practices, setPractices] = useState([]);
  const [error, setError] = useState(null);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    async function fetchPractices() {
      try {
        const response = await fetch(`${BASE_URL}/practices`);
        if (!response.ok) throw new Error("Failed to fetch practices");

        const data = await response.json();
        setPractices(data.practices);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchPractices();
  }, []);

  return (
    <section className={css.practicesSection}>
      <h3 className={css.practicesTitle}>Сфери практики</h3>
      <p className={css.practicesSubtitle}>
        Галузі права, в яких ми надаємо кваліфіковану юридичну допомогу.
      </p>
      <ul className={css.companyServicesList}>
        {practices.map((service) => (
          <li className={css.serviceItem} key={service._id}>
            <Image
              className={css.itemImage}
              alt={service.name}
              src={service.image}
              width={100}
              height={100}
            />
            <p className={css.serviceItemName}>{service.name}</p>
            <p className={css.serviceItemDescription}>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
