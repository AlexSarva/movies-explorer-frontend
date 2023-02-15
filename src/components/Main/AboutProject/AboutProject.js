import './AboutProject.css';
import DiplomInfo from "./DiplomInfo/DiplomInfo";

function AboutProject() {
  return (
    <div className="project">
      <div className="project__description">
        <DiplomInfo title="Дипломный проект включал 5 этапов" description="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."/>
        <DiplomInfo title="На выполнение диплома ушло 5 недель" description="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."/>
      </div>
      <div className="project__timeline">
        <div className="project__timeline-stage">
            <div className="project__timeline-time project__timeline-time_backend">1 неделя</div>
            <p className="project__timeline-description">Back-end</p>
        </div>
        <div className="project__timeline-stage">
          <div className="project__timeline-time project__timeline-time_frontend">4 недели</div>
          <p className="project__timeline-description">Front-end</p>
        </div>
      </div>
    </div>
  )
}

export default AboutProject;