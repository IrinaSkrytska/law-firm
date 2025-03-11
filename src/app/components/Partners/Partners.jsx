"use client";

import { useState, useEffect } from "react";
import css from "./Partners.module.css";
import Image from "next/image";

export default function Partners() {
  const [partners, setPartners] = useState([]);
  const [error, setError] = useState(null);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    async function fetchPartners() {
      try {
        const response = await fetch(`${BASE_URL}/partners`);
        if (!response.ok) throw new Error("Failed to fetch partners");

        const data = await response.json();
        setPartners(data.partners);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchPartners();
  }, []);

  return (
    <section className={css.partnersSection}>
      <h3 className={css.partnersTitle}>Наші партнери</h3>
      <ul className={css.partnersList}>
        {partners.map((partner) => (
          <li className={css.partnerItem} key={partner._id}>
            <Image
              className={css.partnerImage}
              height={280}
              width={320}
              src={partner.image}
              alt={partner.name}
            />
            <p className={css.partnerName}>{partner.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
