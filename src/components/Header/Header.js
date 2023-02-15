import './Header.css';
import Logo from "../Logo/Logo";

function Header() {
  return (
    <header className="header">
      <Logo area="header"/>
      <button type="button" className="header__register">Регистрация</button>
      <button type="button" className="header__login">Войти</button>
    </header>
  )
}

export default Header;