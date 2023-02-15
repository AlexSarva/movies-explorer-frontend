import './Technology.css';
import {Technologies} from "../../utils/constants";
import TechnologyElement from "./TechnologyElement/TechnologyElement";

function Technology() {
  return (
    <div className="technology">
      <h3 className="technology__title">7&#160;технологий</h3>
      <p className="technology__description">На&#160;курсе веб-разработки мы&#160;освоили технологии,
        которые применили в&#160;дипломном проекте.</p>
      <ul className="technology__elements">
        {Technologies.map((technology, n) => (
          <TechnologyElement key={n} name={technology} />
        ))}
      </ul>
    </div>
  )
}

export default Technology;