import '../AuthForm.css'
import '../../../styles/link/link.css'
import AuthForm from '../AuthForm'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../../hook/useAuth'
import useInput from '../../../hook/useInput'

function Register () {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [isBadRegister, setIsBadRegister] = useState(false)
  const [badRegisterReason, setBadRegisterReason] = useState('')
  const email = useInput('', { emailCheck: true })
  const password = useInput('', { passwordCheck: true })
  const name = useInput('', { usernameCheck: true })
  const { signup } = useAuth()

  const handleEmailChange = (e) => {
    setIsBadRegister(false)
    email.onChange(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setIsBadRegister(false)
    password.onChange(e.target.value)
  }

  const handleNameChange = (e) => {
    setIsBadRegister(false)
    name.onChange(e.target.value)
  }

  const handleSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault()
    signup({ name: name.value, email: email.value, password: password.value }, () => {
      setBadRegisterReason('')
      setIsBadRegister(false)
      setIsLoading(false)
      navigate('/movies', { replace: true })
    }, (errValue) => {
      if (errValue.status === 409) {
        setBadRegisterReason('Пользователь с таким email уже существует')
        setIsBadRegister(true)
      } else {
        setBadRegisterReason('Что-то пошло не так, попробуйте еще раз...')
        setIsBadRegister(true)
      }
      setIsLoading(false)
    })
  }

  return (
    <AuthForm title="Добро пожаловать!">
      <form onSubmit={handleSubmit} className="auth__form auth__form_type_register">
        <div className="auth__input-container">
          {(name.isDirty && name.usernameError) && <span className="auth__input-error auth__input-error_active">Неправильно введено Имя</span>}
          <label className="auth__label" htmlFor="username">Имя</label>
          <input id="username" name="username" type="text" className="auth__input"
                 value={name.value} onChange={handleNameChange}
                 placeholder="" disabled={isLoading}/>
        </div>
        <div className="auth__input-container">
          {(email.isDirty && email.emailError) && <span className="auth__input-error auth__input-error_active">Неверно введена почта</span>}
          <label className="auth__label" htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" className="auth__input auth__input_type_email"
                 value={email.value} onChange={handleEmailChange}
                 placeholder="" disabled={isLoading}/>
        </div>
        <div className="auth__input-container">
          {(password.isDirty && password.passwordError) && <span className="auth__input-error auth__input-error_active">Должен быть мин. 8 символов, содержать заглавные буквы и цифры</span>}
          <label className="auth__label" htmlFor="password">Пароль</label>
          <input id="password" name="password" type="password" className="auth__input"
                 value={password.value} onChange={handlePasswordChange}
                 placeholder="" disabled={isLoading}/>
        </div>
        {isBadRegister && <span className="auth__submit-error">{badRegisterReason}</span>}
        <button disabled={email.emailError || password.passwordError || name.usernameError || isLoading} type="submit" className="auth__button auth__button_register link">Зарегистрироваться</button>
        <div className="auth__alternate">
          <span>Уже зарегистрированы? </span>
          <Link to="/signin" className="auth__link link link_text">Войти</Link>
        </div>
      </form>
    </AuthForm>
  )
}

export default Register
