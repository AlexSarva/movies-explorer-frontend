import './Intro.css';
import DiplomInfo from "./DiplomInfo/DiplomInfo";

function Intro() {
  return (
    <div className="intro">
      <div className="intro__description">
        <DiplomInfo title="Дипломный проект включал 5 этапов" description="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."/>
        <DiplomInfo title="На выполнение диплома ушло 5 недель" description="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."/>
      </div>
      <div className="intro__timeline">
        <div className="intro__timeline-stage">
            <div className="intro__timeline-time intro__timeline-time_backend">1 неделя</div>
            <p className="intro__timeline-description">Back-end</p>
        </div>
        <div className="intro__timeline-stage">
          <div className="intro__timeline-time intro__timeline-time_frontend">4 недели</div>
          <p className="intro__timeline-description">Front-end</p>
        </div>
      </div>
    </div>
  )
}

export default Intro;