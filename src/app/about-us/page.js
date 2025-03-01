import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import History from "../components/History/History";
import Team from "../components/Team/Team";

export default function AboutPage() {
  return (
    <>
      <Container>
        <Team title="Історія" />
        <History />
        <Footer />
      </Container>
    </>
  );
}
