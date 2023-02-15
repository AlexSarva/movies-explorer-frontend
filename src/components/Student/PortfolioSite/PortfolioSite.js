import { Link } from "react-router-dom";
function PortfolioSite(props) {
  const {link, title} = props.siteInfo;

  return (
    <div className="student__portfolio-site">
      <p className="student__portfolio-type">{title}</p>
      <Link to={link} className="student__portfolio-link"></Link>
    </div>
  )
}

export default PortfolioSite;