"use client";

import Image from "next/image";
import { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../images/Logo.png";
import LogoBlack from "../../images/LogoBlack.png";
import Phone from "@/app/images/icons/Phone";
import MobileMenu from "@/app/images/icons/MobileMenu";
import Cross from "@/app/images/icons/Cross";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pagesArray = [
    { _id: 1, name: "Головна", link: "/" },
    { _id: 2, name: "Про нас", link: "/about-us" },
    { _id: 3, name: "Послуги", link: "/services" },
    { _id: 4, name: "Послуги для ветеранів", link: "/veteran-services" },
    { _id: 5, name: "Команда", link: "/team" },
    { _id: 6, name: "Президент НАПАУ", link: "/president" },
    { _id: 7, name: "Контакти", link: "/contacts" },
  ];

  return (
    <div className={css.headerSection}>
      <nav className={css.navigation}>
        <Image className={css.logo} src={Logo} alt="Logo" />

        <ul className={css.itemsList}>
          {pagesArray.map((item) => (
            <li className={css.item} key={item._id}>
              <Link onClick={() => setIsMobileMenuOpen(false)} href={item.link}>
                {" "}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {isMobileMenuOpen ? (
          <Cross
            className={css.cross}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        ) : (
          <MobileMenu
            onClick={() => setIsMobileMenuOpen(true)}
            className={css.mobileMenuIcon}
          />
        )}
        {/* </button> */}

        {isMobileMenuOpen && (
          <div className={css.mobileMenu}>
            <Image className={css.mobileLogo} src={LogoBlack} alt="Logo" />
            <ul className={css.mobileMenuList}>
              {pagesArray.map((item) => (
                <li
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={css.item}
                  key={item._id}
                >
                  <Link href={item.link}> {item.name}</Link>
                </li>
              ))}
            </ul>
            <p className={css.phoneText}>
              <Phone color={"black"} className={css.phoneIcon} />
              <a href={`tel:+380661233771`}>+380 (66) 123-37-71</a>
            </p>
          </div>
        )}

        <p className={css.desktopPhoneText}>
          <Phone color={"white"} className={css.phoneIcon} />
          <a href={`tel:+380661233771`}>+380 (66) 123-37-71</a>
        </p>
      </nav>
    </div>
  );
}
