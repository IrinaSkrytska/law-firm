"use client";

import Image from "next/image";
import css from "./TeamMember.module.css";
import Link from "next/link";

export default function TeamMember({ member }) {
  return (
    <section className={css.memberSection}>
      <Link href="/team" className={css.backButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={css.backIcon}
        >
          <polyline points="15 18 9 12 15 6" />
          <line x1="9" y1="12" x2="21" y2="12" />
        </svg>

        <span>Назад</span>
      </Link>

      <h3 className={css.memberTitle}>{member.name}</h3>
      <div className={css.memberThumb}>
        <Image
          className={css.memberImage}
          width={400}
          height={400}
          src={member.icon}
        />
        <ul>
          {member.description.map((text) => (
            <li className={css.memberItem}>{text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
