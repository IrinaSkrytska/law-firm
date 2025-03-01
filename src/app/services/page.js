import CallBack from "../components/CallBack/CallBack";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Packages from "../components/Packages/Packages";
import Practices from "../components/Practices/Practices";
import Services from "../components/Services/Services";

export default function ServicesPage() {
  return (
    <>
      <Container>
        <Services />
        <Practices />
        <CallBack />
        <Packages />
        <Footer />
      </Container>
    </>
  );
}
