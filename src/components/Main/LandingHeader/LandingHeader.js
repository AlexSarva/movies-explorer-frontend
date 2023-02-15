import './LandingHeader.css';
import Logo from "../../Logo/Logo";
import {Link} from "react-router-dom";

function LandingHeader() {
  return (
    <header className="landing-header">
      <Logo area="landing-header"/>
      <Link to="/signup" className="landing-header__register">Регистрация</Link>
      <Link to="/signin" className="landing-header__login">Войти</Link>
    </header>
  )
}

export default LandingHeader;