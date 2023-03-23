import './Navigation.css'
import '../../styles/link/link.css'
import { NavLink } from 'react-router-dom'
import accountIcon from '../../images/header-account-icon.svg'

function Navigation (props) {
  return (
    <nav className={`nav nav_type_${props.type}`}>
      <ul className={`nav__elements nav__elements_type_${props.type}`}>
        {props.type === 'vertical' &&
          <li className="nav__element link link_text">
          <NavLink onClick={props.onChoose} className={({ isActive }) => isActive
            ? `nav__link nav__link_type_${props.type} nav__link_active`
            : `nav__link nav__link_type_${props.type}`}
          to="/">Главная</NavLink>
          </li>
        }
        <li className="nav__element link link_text">
          <NavLink onClick={props.onChoose} className={({ isActive }) => isActive
            ? `nav__link nav__link_type_${props.type} nav__link_active`
            : `nav__link nav__link_type_${props.type}`}
                   to="/movies">Фильмы</NavLink>
        </li>
        <li className="nav__element link link_text">
          <NavLink onClick={props.onChoose} className={({ isActive }) => isActive
            ? `nav__link nav__link_type_${props.type} nav__link_active`
            : `nav__link nav__link_type_${props.type}`}
                   to="/saved-movies">
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className={`nav__element nav__element_type_${props.type} link`}>
          <NavLink className={`nav__account nav__account_type_${props.type}`} to="/profile">
            {props.type === 'header' && <img className="nav__account_img" src={accountIcon} alt="account-icon" />}
            <span className="nav__account-text">Аккаунт</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
