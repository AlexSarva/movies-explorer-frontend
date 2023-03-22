import '../AuthForm.css'
import '../../../styles/link/link.css'
import AuthForm from '../AuthForm'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hook/useAuth'
import useInput from '../../../hook/useInput'
import { useState } from 'react'
function Login () {
  const navigate = useNavigate()
  const [isBadLogin, setIsBadLogin] = useState(false)
  const [badLoginReason, setBadLoginReason] = useState('')
  const email = useInput('', { emailCheck: true })
  const password = useInput('', { passwordCheck: true })
  const { signin } = useAuth()

  const handleEmailChange = (e) => {
    setIsBadLogin(false)
    email.onChange(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setIsBadLogin(false)
    password.onChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signin({ email: email.value, password: password.value }, () => {
      setBadLoginReason('')
      setIsBadLogin(false)
      navigate('/movies', { replace: true })
    }, (errValue) => {
      if (errValue.status === 401) {
        setBadLoginReason('Неверное имя пользователя или пароль')
        setIsBadLogin(true)
      } else {
        setBadLoginReason('Что-то пошло не так, попробуйте еще раз...')
        setIsBadLogin(true)
      }
    })
  }

  return (
    <AuthForm title="Рады видеть!">
      <form onSubmit={handleSubmit} className="auth__form auth__form_type_login">
        <div className="auth__input-container">
          {(email.isDirty && email.emailError) && <span className="auth__input-error auth__input-error_active">Неверно введена почта</span>}
          <label className="auth__label" htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" className="auth__input auth__input_type_email" value={email.value} onChange={handleEmailChange}
                 placeholder="" />
        </div>
        <div className="auth__input-container">
          {(password.isDirty && password.passwordError) && <span className="auth__input-error auth__input-error_active">Должен быть мин. 8 символов, содержать заглавные буквы и цифры</span>}
          <label className="auth__label" htmlFor="password">Пароль</label>
          <input id="password" name="password" type="password" className="auth__input auth__input_error" value={password.value} onChange={handlePasswordChange}
                 placeholder="" />
        </div>
        {isBadLogin && <span className="auth__submit-error">{badLoginReason}</span>}
        <button disabled={email.emailError || password.passwordError} type="submit" className="auth__button auth__button_login link">Войти</button>
        <div className="auth__alternate">
          <span>Ещё не зарегистрированы? </span>
          <Link to="/signup" className="auth__link link link_text">Регистрация</Link>
        </div>
      </form>
    < /AuthForm >
  )
}

export default Login
