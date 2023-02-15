import '../AuthForm.css';
import AuthForm from "../AuthForm";
import {Link} from "react-router-dom";
function Login() {
  return (
    <AuthForm title="Рады видеть!" children={
      <form className="auth__form">
        <div className="auth__input-container">
          <label className="auth__label" htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" className="auth__input auth__input_type_email"
                 placeholder="" required minLength="6" maxLength="40"/>
        </div>
        <div className="auth__input-container">
          <label className="auth__label" htmlFor="password">Пароль</label>
          <input id="password" name="password" type="password" className="auth__input"
                 placeholder="" required minLength="6" maxLength="40"/>
        </div>
        <span className="auth__input-error">Что-то пошло не так...</span>
        <button type="submit" className="auth__button auth__button_login">Войти</button>
        <div className="auth__alternate">
          <span>Ещё не зарегистрированы? </span>
          <Link to="/signup" className="auth__link">Регистрация</Link>
        </div>
      </form>
    } />
  )
}

export default Login;