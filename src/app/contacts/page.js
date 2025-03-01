import Contacts from "../components/Contacts/Contacts";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import History from "../components/History/History";
import Team from "../components/Team/Team";

export default function ContactsPage() {
  return (
    <>
      <Container>
        <Team title="наші контакти" />
        <Contacts />
        <Footer />
      </Container>
    </>
  );
}
