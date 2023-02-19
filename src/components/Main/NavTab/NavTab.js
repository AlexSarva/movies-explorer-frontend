import './NavTab.css'
import '../../../styles/link/link.css'
import { HashLink } from 'react-router-hash-link'

function NavTab (props) {
  return (
    <nav onMouseLeave={props.onMouseLeave} className={`nav-tab ${props.isOpen ? 'nav-tab_active' : null}`}>
      <ul className="nav-tab__elements">
        <li className="nav-tab__element">
          <HashLink to="#about-project" className="nav-tab__link link" smooth >
            <span className="nav-tab__span">О проекте</span>
          </HashLink>
        </li>
        <li className="nav-tab__element">
          <HashLink to="#tech" className="nav-tab__link link" smooth >
            <span className="nav-tab__span">Технологии</span>
          </HashLink>
        </li>
        <li className="nav-tab__element">
          <HashLink to="#student" className="nav-tab__link link" smooth >
            <span className="nav-tab__span">Студент</span>
          </HashLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab
