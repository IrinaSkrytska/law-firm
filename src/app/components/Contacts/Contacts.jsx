"use client";

import Image from "next/image";
import css from "./Contacts.module.css";
import NewsImage from "../../images/NewsImage.jpg";
import Link from "next/link";
import ArrowRight from "../../images/ArrowRight.svg";
import ContactForm from "../ContactForm/ContactForm";
import Phone from "../../images/icons/Phone";
import ScheduleIcon from "../../images/ScheduleIcon.svg";
import MailIcon from "../../images/MailIcon.svg";
import AddressIcon from "../../images/AddressIcon.svg";

export default function Contacts() {
  const contactsArray = [
    {
      _id: 1,
      contactsText: [
        "Важливо:",
        "У зв`язку з військовим станом і тим, що наш офіс перебуває на режимній території урядового кварталу(біля вулиці Банкова, офісу Президента) зустрічі тимчасово в офісі не можливі!",
        "Для зустрічі вам треба записатись на консультацію та оговорити деталі!",
        "Дякуємо за розуміння!",
      ],
      phones: ["+380 (66) 123-37-71", "+380 (95) 836-52-33"],
      email: "national.association.hrdlu@gmail.com",
      address: "м. Київ, вул. Лютеранська 27, офіс 29. Індекс: 01024",
      schedule: "Пн-Пт: 08:00 - 21:00",
    },
  ];

  return (
    <section className={css.contactsSection}>
      <div className={css.contactsThumb}>
        <p className={css.contactsTitle}>Залишились питання?</p>
        <p className={css.contactsText}>
          Дзвони нам за номером вказаним нижче або залиш заявку з питанням, а ми
          в свою чергу як найшвидше опрацюємо інформацію та зв'яжемось з вами!
        </p>
        <ul className={css.contactsList}>
          {contactsArray.map((contact) =>
            contact.contactsText.map((text, index) => (
              <li
                className={css.contactsDescription}
                key={`${contact._id}-${index}`}
              >
                {text}
              </li>
            ))
          )}
        </ul>
        <div className={css.connectionThumb}>
          <div className={css.itemsThumb}>
            <p className={css.contactName}>
              <Phone
                className={css.phoneIcon}
                color={"#604B33"}
                width={36}
                height={36}
              />
              Телефони
            </p>
            <ul className={css.phonesList}>
              {contactsArray.map((contact) =>
                contact.phones.map((phone, index) => (
                  <li className={css.phoneItem} key={`phone-${index}`}>
                    <a href={`tel:${phone}`} className={css.phoneLink}>
                      {phone}
                    </a>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className={css.itemsThumb}>
            <p className={css.contactName}>
              <Image
                src={AddressIcon}
                className={css.phoneIcon}
                width={36}
                height={36}
              />
              Наша адреса
            </p>

            {contactsArray.map((contact) => (
              <p key={`address-${contact._id}`} className={css.addressItem}>
                {contact.address}
              </p>
            ))}
          </div>

          <div className={css.itemsThumb}>
            <p className={css.contactName}>
              <Image
                src={MailIcon}
                className={css.phoneIcon}
                width={36}
                height={36}
              />
              Email
            </p>
            {contactsArray.map((contact) => (
              <p key={`address-${contact._id}`} className={css.emailItem}>
                {contact.email}
              </p>
            ))}
          </div>
          <div className={css.itemsThumb}>
            <p className={css.contactName}>
              <Image
                src={ScheduleIcon}
                className={css.phoneIcon}
                width={36}
                height={36}
              />
              Час роботи
            </p>

            {contactsArray.map((contact) => (
              <p key={`address-${contact._id}`} className={css.emailItem}>
                {contact.schedule}
              </p>
            ))}
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
