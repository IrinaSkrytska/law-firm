import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Company from "./components/Company/Company";
import Container from "./components/Container/Container";
import CallBack from "./components/CallBack/CallBack";
import Experience from "./components/Experience/Experience";
import Reviews from "./components/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <Company />
        <CallBack />
        <Experience />
        <Reviews />
      </Container>
    </>
  );
}
