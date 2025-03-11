import TeamMember from "@/app/components/TeamMember/TeamMember";
import Container from "@/app/components/Container/Container";
import Footer from "@/app/components/Footer/Footer";
import Team from "@/app/components/Team/Team";
import TeamMember1 from "../../images/TeamMember1.jpg";
import Facebook from "../../images/Facebook.svg";
import Instagram from "../../images/Instagram.svg";
import Telegram from "../../images/Telegram.svg";

export default function TeamMemberPage() {
  const member = {
    _id: 1,
    name: "Кучер Владислав",
    englishName: "Kucher Vladislav",
    description: [
      "Адвокат із багаторічним досвідом роботи, який успішно захищає інтереси клієнтів у судових справах, консультує з юридичних питань і допомагає вирішувати складні правові ситуації. Його практика охоплює як цивільні та господарські спори, так і кримінальні та адміністративні справи.",
      "За роки роботи він здобув глибокі знання законодавства та практичний досвід у веденні переговорів, досудовому врегулюванні конфліктів і складанні юридичних документів. Завдяки аналітичному мисленню та уважності до деталей знаходить ефективні стратегії захисту, що дозволяє досягати позитивних результатів для клієнтів.",
      "Важливою складовою його роботи є індивідуальний підхід та довіра, адже кожна справа унікальна, а правова допомога повинна бути максимально ефективною та професійною. Він завжди діє в інтересах своїх клієнтів, допомагаючи їм знайти найкраще рішення навіть у найскладніших ситуаціях.",
    ],
    role: "Адвокат, Старший партнер",
    icon: TeamMember1,
    alt: "Адвокат, Старший партнер",
    socialMediaArray: [
      {
        _id: 1,
        name: "Facebook",
        icon: Facebook,
        link: "/",
      },
      {
        _id: 2,
        name: "Instagram",
        icon: Instagram,
        link: "/",
      },
      {
        _id: 3,
        name: "Telegram",
        icon: Telegram,
        link: "/",
      },
    ],
  };

  return (
    <>
      <Container>
        <Team />
        <TeamMember member={member} />
        <Footer />
      </Container>
    </>
  );
}
