import './Techs.css'
import { Technologies } from '../../../utils/constants'
import TechsElement from './TechsElement/TechsElement'
import Section from '../Section/Section'

function Techs () {
  return (
    <Section title="Технологии" theme="gray" strange={true} sectionID="tech">
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
    </Section>
  )
}

export default Techs
