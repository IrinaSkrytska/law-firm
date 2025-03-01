"use client";

import Image from "next/image";
import css from "./TeamMembers.module.css";
import TeamMember1 from "../../images/TeamMember1.jpg";
import TeamMember2 from "../../images/TeamMember2.jpg";
import TeamMember3 from "../../images/TeamMember3.jpg";
import Facebook from "../../images/Facebook.svg";
import Instagram from "../../images/Instagram.svg";
import Telegram from "../../images/Telegram.svg";

export default function TeamMembers() {
  const teamMembersArray = [
    {
      _id: 1,
      name: "Кучер Владислав",
      role: "Адвокат, Старший партнер",
      icon: TeamMember1,
      alt: "Адвокат, Старший партнер",
      socialMediaArray: [
        {
          _id: 1,
          name: "Facebook",
          icon: Facebook,
          link: "/",
        },
        {
          _id: 2,
          name: "Instagram",
          icon: Instagram,
          link: "/",
        },
        {
          _id: 3,
          name: "Telegram",
          icon: Telegram,
          link: "/",
        },
      ],
    },
    {
      _id: 2,
      name: "Білова Людмила",
      role: "Адвокат, Керівник з військових питань",
      icon: TeamMember2,
      alt: "Адвокат, Керівник з військових питань",
      socialMediaArray: [
        {
          _id: 1,
          name: "Facebook",
          icon: Facebook,
          link: "/",
        },
        {
          _id: 2,
          name: "Instagram",
          icon: Instagram,
          link: "/",
        },
        {
          _id: 3,
          name: "Telegram",
          icon: Telegram,
          link: "/",
        },
      ],
    },
    {
      _id: 3,
      name: "Сирець Юрій",
      role: "Адвокат, Керівник кримінальної практики",
      icon: TeamMember3,
      alt: "Адвокат, Керівник кримінальної практики",
      socialMediaArray: [
        {
          _id: 1,
          name: "Facebook",
          icon: Facebook,
          link: "/",
        },
        {
          _id: 2,
          name: "Instagram",
          icon: Instagram,
          link: "/",
        },
        {
          _id: 3,
          name: "Telegram",
          icon: Telegram,
          link: "/",
        },
      ],
    },
    {
      _id: 4,
      name: "Кучер Владислав",
      role: "Адвокат, Старший партнер",
      icon: TeamMember1,
      alt: "Адвокат, Старший партнер",
      socialMediaArray: [
        {
          _id: 1,
          name: "Facebook",
          icon: Facebook,
          link: "/",
        },
        {
          _id: 2,
          name: "Instagram",
          icon: Instagram,
          link: "/",
        },
        {
          _id: 3,
          name: "Telegram",
          icon: Telegram,
          link: "/",
        },
      ],
    },
    {
      _id: 5,
      name: "Білова Людмила",
      role: "Адвокат, Керівник з військових питань",
      icon: TeamMember2,
      alt: "Адвокат, Керівник з військових питань",
      socialMediaArray: [
        {
          _id: 1,
          name: "Facebook",
          icon: Facebook,
          link: "/",
        },
        {
          _id: 2,
          name: "Instagram",
          icon: Instagram,
          link: "/",
        },
        {
          _id: 3,
          name: "Telegram",
          icon: Telegram,
          link: "/",
        },
      ],
    },
    {
      _id: 6,
      name: "Сирець Юрій",
      role: "Адвокат, Керівник кримінальної практики",
      icon: TeamMember3,
      alt: "Адвокат, Керівник кримінальної практики",
      socialMediaArray: [
        {
          _id: 1,
          name: "Facebook",
          icon: Facebook,
          link: "/",
        },
        {
          _id: 2,
          name: "Instagram",
          icon: Instagram,
          link: "/",
        },
        {
          _id: 3,
          name: "Telegram",
          icon: Telegram,
          link: "/",
        },
      ],
    },
  ];

  return (
    <section className={css.teamSection}>
      <h2 className={css.teamTitle}>НАША КОМАНДА професіоналів </h2>
      <p className={css.teamSubtitle}>
        Надійний захист Ваших інтересів в адміністративних судових процесах.
      </p>
      <ul className={css.teamList}>
        {teamMembersArray.map((member) => (
          <li className={css.teamItem} key={member._id}>
            <Image
              className={css.itemImage}
              alt={member.alt}
              width={416}
              height={416}
              src={member.icon}
            />
            <p className={css.itemName}>{member.name}</p>
            <p className={css.itemRole}>{member.role}</p>
            <ul className={css.socialMediaList}>
              {member.socialMediaArray.map((media) => (
                <li key={media._id} className={css.socialMediaItem}>
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
