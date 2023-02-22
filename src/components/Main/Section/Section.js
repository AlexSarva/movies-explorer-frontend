import './Section.css'

function Section (props) {
  return (
    <section id={props.sectionID} className={`section section_theme_${props.theme} ${props.strange ? 'section_strange' : null}`}>
      <h2 className="section__title">{props.title}</h2>
      <div className="section__content">{props.children}</div>
    </section>
  )
}

export default Section
