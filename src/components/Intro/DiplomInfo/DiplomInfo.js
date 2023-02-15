function DiplomInfo(props) {
  return (
    <div className="intro__diplom-info">
      <h3 className="intro__diplom-title">{props.title}</h3>
      <p className="intro__diplom-description">{props.description}</p>
    </div>
  )
}

export default DiplomInfo;