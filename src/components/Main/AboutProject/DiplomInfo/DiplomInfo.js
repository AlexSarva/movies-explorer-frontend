function DiplomInfo(props) {
  return (
    <div className="project__diplom-info">
      <h3 className="project__diplom-title">{props.title}</h3>
      <p className="project__diplom-description">{props.description}</p>
    </div>
  )
}

export default DiplomInfo;