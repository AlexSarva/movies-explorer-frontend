import './Section.css';
import { Fragment } from "react";

function Section(props) {
  return (
    <Fragment>
      <section className={`section section_theme_${props.theme} ${props.strange && "section_strange"}`}>
        <h2 className="section__title">{props.title}</h2>
        <div className="section__content">{props.children}</div>
      </section>
    </Fragment>
  )
}

export default Section;