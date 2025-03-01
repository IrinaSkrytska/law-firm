import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Team from "../components/Team/Team";
import TeamMembers from "../components/TeamMembers/TeamMembers";

export default function TeamPage() {
  return (
    <>
      <Container>
        <Team title="наша команда" />
        <TeamMembers />
        <Footer />
      </Container>
    </>
  );
}
