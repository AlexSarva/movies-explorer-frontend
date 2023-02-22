import { Link } from 'react-router-dom'
import '../../../../styles/link/link.css'
function PortfolioSite (props) {
  const { link, title } = props.siteInfo

  return (
    <Link to={link} className="student__portfolio-site link"
          target="_blank" rel="noopener noreferrer">
      <p className="student__portfolio-type">{title}</p>
      <div className="student__portfolio-link"></div>
    </Link>
  )
}

export default PortfolioSite
