import { Sites } from '../../../../utils/constants'
import PortfolioSite from '../PortfolioSite/PortfolioSite'

function Portfolio () {
  return (
    <div className="student__portfolio">
      <p className="student__portfolio-title">Портфолио</p>
      <ul className="student__portfolio-sites">
        {Sites.map((site, n) => (
          <PortfolioSite key={n} siteInfo={site}/>
        ))}
      </ul>
    </div>
  )
}

export default Portfolio
