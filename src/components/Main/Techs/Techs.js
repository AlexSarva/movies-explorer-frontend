import './Techs.css';
import {Technologies} from "../../../utils/constants";
import TechsElement from "./TechsElement/TechsElement";

function Techs() {
  return (
    <div className="technology">
      <h3 className="technology__title">7&#160;технологий</h3>
      <p className="technology__description">На&#160;курсе веб-разработки мы&#160;освоили технологии,
        которые применили в&#160;дипломном проекте.</p>
      <ul className="technology__elements">
        {Technologies.map((technology, n) => (
          <TechsElement key={n} name={technology} />
        ))}
      </ul>
    </div>
  )
}

export default Techs;