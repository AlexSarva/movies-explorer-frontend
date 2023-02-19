import '../AuthForm.css'
import '../../../styles/link/link.css'
import AuthForm from '../AuthForm'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Register () {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/movies', { replace: true })
  }

  return (
    <AuthForm title="Добро пожаловать!">
      <form onSubmit={handleSubmit} className="auth__form auth__form_type_register">
        <div className="auth__input-container">
          <label className="auth__label" htmlFor="username">Имя</label>
          <input id="username" name="username" type="text" className="auth__input"
                 value={username} onChange={handleChangeUsername}
                 placeholder="" required minLength="6" maxLength="40"/>
        </div>
        <div className="auth__input-container">
          <label className="auth__label" htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" className="auth__input auth__input_type_email"
                 value={email} onChange={handleChangeEmail}
                 placeholder="" required minLength="6" maxLength="40"/>
        </div>
        <div className="auth__input-container">
          <label className="auth__label" htmlFor="password">Пароль</label>
          <input id="password" name="password" type="password" className="auth__input"
                 value={password} onChange={handleChangePassword}
                 placeholder="" required minLength="6" maxLength="40"/>
        </div>
        <span className="auth__input-error">Что-то пошло не так...</span>
        <button type="submit" className="auth__button link">Зарегистрироваться</button>
        <div className="auth__alternate">
          <span>Уже зарегистрированы? </span>
          <Link to="/signin" className="auth__link link link_text">Войти</Link>
        </div>
      </form>
    </AuthForm>
  )
}

export default Register
