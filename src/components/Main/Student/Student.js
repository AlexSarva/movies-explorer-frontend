import './Student.css'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import Section from '../Section/Section'

function Student () {
  return (
    <Section title="Студент" theme="black" sectionID="student">
      <div className="student">
       <AboutMe />
       <Portfolio />
      </div>
    </Section>
  )
}

export default Student
