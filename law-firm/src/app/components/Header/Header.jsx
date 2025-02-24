"use client";

import Image from "next/image";
import css from "./Header.module.css";
import Logo from "../../images/Logo.png";
import Phone from "@/app/images/icons/Phone";

export default function Header() {
  const pagesArray = [
    {
      _id: 1,
      name: "Головна",
      link: "/",
    },
    {
      _id: 2,
      name: "Про нас",
      link: "/about-us",
    },
    {
      _id: 3,
      name: "Послуги",
      link: "/services",
    },
    {
      _id: 4,
      name: "Послуги",
      link: "/services",
    },
    {
      _id: 5,
      name: "Послуги для ветеранів",
      link: "/services-for-veterans",
    },
    {
      _id: 6,
      name: "Новини",
      link: "/news",
    },
    {
      _id: 7,
      name: "Контакти",
      link: "/contacts",
    },
  ];

  return (
    <div className={css.headerSection}>
      <nav className={css.navigation}>
        <Image className={css.logo} src={Logo} />
        <ul className={css.itemsList}>
          {pagesArray.map((item) => (
            <li className={css.item} key={item._id}>
              {item.name}
            </li>
          ))}
        </ul>
        <p className={css.phoneText}>
          <Phone className={css.phoneIcon} />
          <a href={`tel:+380 (66) 123-37-71`}>+380 (66) 123-37-71</a>
        </p>
      </nav>
    </div>
  );
}
