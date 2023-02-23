import '../AuthForm.css'
import '../../../styles/link/link.css'
import AuthForm from '../AuthForm'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../../hook/useAuth'
function Login () {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signin } = useAuth()

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signin({ email, password }, () => navigate('/movies', { replace: true }))
  }

  return (
    <AuthForm title="Рады видеть!">
      <form onSubmit={handleSubmit} className="auth__form auth__form_type_login">
        <div className="auth__input-container">
          <label className="auth__label" htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" className="auth__input auth__input_type_email" value={email} onChange={handleChangeEmail}
                 placeholder="" required minLength="6" maxLength="40"/>
        </div>
        <div className="auth__input-container">
          <label className="auth__label" htmlFor="password">Пароль</label>
          <input id="password" name="password" type="password" className="auth__input auth__input_error" value={password} onChange={handleChangePassword}
                 placeholder="" required minLength="6" maxLength="40"/>
        </div>
        <span className="auth__input-error auth__input-error_active">Что-то пошло не так...</span>
        <button type="submit" className="auth__button auth__button_login link">Войти</button>
        <div className="auth__alternate">
          <span>Ещё не зарегистрированы? </span>
          <Link to="/signup" className="auth__link link link_text">Регистрация</Link>
        </div>
      </form>
    < /AuthForm >
  )
}

export default Login
