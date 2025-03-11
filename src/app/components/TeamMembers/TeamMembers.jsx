"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import css from "./TeamMembers.module.css";

export default function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [error, setError] = useState(null);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const response = await fetch(`${BASE_URL}/members`);
        if (!response.ok) throw new Error("Failed to fetch team members");

        const data = await response.json();
        setTeamMembers(data.members);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchTeamMembers();
  }, []);

  return (
    <section className={css.teamSection}>
      <h2 className={css.teamTitle}>НАША КОМАНДА професіоналів</h2>
      <p className={css.teamSubtitle}>
        Надійний захист Ваших інтересів в адміністративних судових процесах.
      </p>
      <ul className={css.teamList}>
        {teamMembers.map((member) => (
          <li className={css.teamItem} key={member._id}>
            <Link href={`/team/${member.slug}`}>
              <Image
                className={css.itemImage}
                alt={member.name}
                width={416}
                height={416}
                src={member.icon}
              />
              <p className={css.itemName}>{member.name}</p>
              <p className={css.itemRole}>{member.role}</p>
            </Link>
            <ul className={css.socialMediaList}>
              {member.socialMediaArray.map((media) => (
                <li key={media.name} className={css.socialMediaItem}>
                  <a
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={media.icon}
                      alt={media.name}
                      width={24}
                      height={24}
                      className={css.socialMediaIcon}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
