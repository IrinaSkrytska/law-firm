import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Company from "./components/Company/Company";
import Container from "./components/Container/Container";
import CallBack from "./components/CallBack/CallBack";
import Experience from "./components/Experience/Experience";
import Reviews from "./components/Reviews/Reviews";
import Consultation from "./components/Consultation/Consultation";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Vacancies from "./components/Vacancies/Vacancies";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <Company />
        <CallBack />
        <Experience />
        <Vacancies />
        <Reviews />
        <Consultation />
        <Partners />
        <Footer />
      </Container>
    </>
  );
}
