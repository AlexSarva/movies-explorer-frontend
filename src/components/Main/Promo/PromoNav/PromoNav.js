import './PromoNav.css'
import '../../../../styles/link/link.css'
import { HashLink } from 'react-router-hash-link'

function PromoNav (props) {
  return (
    <nav onMouseLeave={props.onMouseLeave} className={`promo__nav ${props.isOpen ? 'promo__nav_active' : ''}`}>
      <ul className="promo__nav-elements">
        <li className="promo__nav-element">
          <HashLink to="#about-project" className="promo__nav-link" smooth >
            <span className="promo__nav-text">О проекте</span>
          </HashLink>
        </li>
        <li className="promo__nav-element">
          <HashLink to="#tech" className="promo__nav-link" smooth >
            <span className="promo__nav-text">Технологии</span>
          </HashLink>
        </li>
        <li className="promo__nav-element">
          <HashLink to="#student" className="promo__nav-link" smooth >
            <span className="promo__nav-text">Студент</span>
          </HashLink>
        </li>
      </ul>
    </nav>
  )
}

export default PromoNav
