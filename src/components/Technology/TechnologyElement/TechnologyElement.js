function TechnologyElement(props) {
  return (
    <li className="technology__element">
      <p className="technology__element-text">{props.name}</p>
    </li>
  )
}

export default TechnologyElement;