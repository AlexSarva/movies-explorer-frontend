import './Main.css';
import LandingHeader from "./LandingHeader/LandingHeader";
import Promo from "./Promo/Promo";
import Section from "./Section/Section";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import Student from "./Student/Student";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <main className="main">
      <LandingHeader />
      <Promo />
      <Section title="О проекте" theme="black" children={<AboutProject />} />
      <Section title="Технологии" theme="gray" strange={true} children={<Techs />}/>
      <Section title="Студент" theme="black" children={<Student />}/>
      <Footer />
    </main>
  )
}

export default Main;