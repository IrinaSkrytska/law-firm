import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import NewsPage from "../components/NewsPage/NewsPage";
import Team from "../components/Team/Team";

export default function News() {
  return (
    <>
      <Container>
        <Team title="Новини" />
        <NewsPage />
        <Footer />
      </Container>
    </>
  );
}
