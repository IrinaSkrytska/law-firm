import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Team from "../components/Team/Team";
import Veteran from "../components/Veteran/Veteran";

export default function VeteranServices() {
  return (
    <>
      <Container>
        <Team title="Послуги для ветеранів" />
        <Veteran />
        <Footer />
      </Container>
    </>
  );
}
