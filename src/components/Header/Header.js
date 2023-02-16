import './Header.css';
import '../../styles/link/link.css';
import Logo from "../Logo/Logo";
import {NavLink, useNavigate} from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  const accountNavigate = () => {
    navigate("/profile",{replace: true});
  }

  return (
    <header className="header">
      <Logo area="header"/>
      <ul className="header__nav-elements">
        <li className="header__nav-element link_text">
          <NavLink className={({isActive}) => isActive ? 'header__nav-link header__nav-link_active' : 'header__nav-link'}
                   to="/movies">Фильмы</NavLink>
        </li>
        <li className="header__nav-element link_text">
          <NavLink className={({isActive}) => isActive ? 'header__nav-link header__nav-link_active' : 'header__nav-link'}
                   to="/saved-movies">
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <div onClick={accountNavigate} className="header__account link">
        <span className="header__account-text">Аккаунт</span>
      </div>
    </header>
  )
}

export default Header;