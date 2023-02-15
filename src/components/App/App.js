import Lead from "../Lead/Lead";
import './App.css';
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Section from "../Section/Section";
import Technology from "../Technology/Technology";
import Student from "../Student/Student";
import Footer from "../Footer/Footer";
function App() {
  return (
    <main className="content">
      <Header />
      <Lead />
      <Section title="О проекте" theme="black" children={<Intro />} />
      <Section title="Технологии" theme="gray" strange={true} children={<Technology />}/>
      <Section title="Студент" theme="black" children={<Student />}/>
      <Footer />
    </main>
  )
}

export default App;
