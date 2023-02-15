import './Student.css';
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";

function Student() {
  return (
    <div className="student">
      <AboutMe />
      <Portfolio />
    </div>
  )
}

export default Student;