import './Header.css';
import Logo from "../Logo/Logo";
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Logo area="header"/>
      <ul className="header__nav-elements">
        <li className="header__nav-element">
          <NavLink className="header__nav-link header__nav-link_type_main" to="/movies">Фильмы</NavLink>
        </li>
        <li className="header__nav-element">
          <NavLink className={({isActive}) => isActive ? 'header__nav-sublink header__nav-sublink_active' : 'header__nav-sublink'}
                   to="/saved-movies">
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <div className="header__account">
        <span className="header__account-text">Аккаунт</span>
      </div>
    </header>
  )
}

export default Header;