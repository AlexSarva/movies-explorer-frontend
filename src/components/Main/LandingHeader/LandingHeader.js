import './LandingHeader.css';
import Logo from "../../Logo/Logo";

function LandingHeader() {
  return (
    <header className="landing-header">
      <Logo area="header"/>
      <button type="button" className="landing-header__register">Регистрация</button>
      <button type="button" className="landing-header__login">Войти</button>
    </header>
  )
}

export default LandingHeader;