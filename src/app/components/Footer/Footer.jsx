"use client";

import css from "./Footer.module.css";
import Image from "next/image";
import Logo from "../../images/Logo.png";
import Facebook from "../../images/Facebook.svg";
import Instagram from "../../images/Instagram.svg";
import Telegram from "../../images/Telegram.svg";
import SpitzumLogo from "../../images/SpitzumLogo.png";

export default function Footer() {
  const socialMediaArray = [
    {
      _id: 1,
      name: "Facebook",
      icon: Facebook,
      link: "",
    },
    {
      _id: 2,
      name: "Instagram",
      icon: Instagram,
      link: "",
    },
    {
      _id: 3,
      name: "Telegram",
      icon: Telegram,
      link: "",
    },
  ];

  const menuArray = [
    {
      _id: 1,
      name: "Головна",
      link: "",
    },
    {
      _id: 2,
      name: "Послуги",
      link: "",
    },
    {
      _id: 3,
      name: "Команда",
      link: "",
    },
    {
      _id: 4,
      name: "Контакти",
      link: "",
    },
    {
      _id: 5,
      name: "Новини",
      link: "",
    },
    {
      _id: 6,
      name: "Історія",
      link: "",
    },
  ];

  return (
    <section className={css.footerSection}>
      <div className={css.footerThumb}>
        <div className={css.socialThumb}>
          <Image className={css.logo} width={65} height={65} src={Logo} />
          <p className={css.authorRightsText}>
            Усі данні, фото та інформація захищені авторським правом власника!
          </p>
          <ul className={css.socialMediaList}>
            {socialMediaArray.map((media) => (
              <li className={css.socialMediaItem}>
                <Image src={media.icon} />
              </li>
            ))}
          </ul>
        </div>
        <div className={css.menuThumb}>
          <p className={css.menuTitle}>Меню</p>
          <ul className={css.menuList}>
            {menuArray.map((menuItem) => (
              <li className={css.menuItem}>{menuItem.name}</li>
            ))}
          </ul>
        </div>
        <div className={css.contactContainer}>
          <p className={css.menuTitle}>Наші контакти</p>
          <p className={css.addressText}>
            м. Київ, вул. Лютеранська 27, офіс 29
          </p>
          <p className={css.addressText}>Індекс: 01024З</p>
          <p className={css.meetingText}>Зустрічі виключно за домовленістю</p>
          <a href={`tel:+380 (66) 123-37-71`} className={css.phone}>
            +380 (66) 123-37-71
          </a>
          <a href={`tel:+380 (95) 836-52-33`} className={css.phone}>
            +380 (95) 836-52-33
          </a>
          <a
            href={`mailto:national.association.hrdlu@gmail.com`}
            className={css.email}
          >
            national.association.hrdlu@gmail.com
          </a>
        </div>
        <div className={css.contactUsThumb}>
          <p className={`${css.menuTitle} ${css.last}`}>Зворотній зв’язок</p>
          <p className={css.contactUsText}>Написати нам</p>
          <p className={css.contactUsText}>Замовити консультацію</p>
        </div>
      </div>
      <p className={css.copyright}>
        ©Copyright 2025. Powered by Spitzum{" "}
        <Image
          className={css.SpitzumLogo}
          width={30}
          height={30}
          src={SpitzumLogo}
        />
      </p>
    </section>
  );
}
