import './Profile.css'
import '../../styles/link/link.css'
import Header from '../Header/Header'
import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'
import useInput from '../../hook/useInput'
import { useSearch } from '../../hook/useSearch'

function Profile () {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const { user, signout, patchUser } = useAuth()
  const navigate = useNavigate()
  const [isSameValues, setIsSameValues] = useState(false)
  const [isBadResponse, setIsBadResponse] = useState(false)
  const [badResponseReason, setBadResponseReason] = useState('')
  const emailCheck = useInput(user.email, { emailCheck: true })
  const nameCheck = useInput(user.name, { usernameCheck: true })
  const { clearMoviesSearch } = useSearch()

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
    nameCheck.onChange(e.target.value)
    setIsBadResponse(false)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    emailCheck.onChange(e.target.value)
    setIsBadResponse(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    patchUser({ name: username, email }, () => {
      setBadResponseReason('')
      setIsBadResponse(false)
    }, (errValue) => {
      if (errValue.status === 409) {
        setBadResponseReason('Пользователь с таким email уже существует')
        setIsBadResponse(true)
      } else {
        setBadResponseReason('Что-то пошло не так, попробуйте еще раз...')
        setIsBadResponse(true)
      }
    })
  }

  const handleLogOut = () => {
    signout(() => {
      clearMoviesSearch()
      navigate('/', { replace: true })
    })
  }

  useEffect(() => {
    if (user.email === email && user.name === username) {
      setIsSameValues(true)
    } else {
      setIsSameValues(false)
    }
  }, [email, username, user])

  useEffect(() => {
    setUsername(user.name)
    setEmail(user.email)
  }, [])

  return (
    <Fragment>
      <Header />
      <section className="profile">
        <h2 className="profile__title">{`Привет, ${user.name}!`}</h2>
        <form onSubmit={handleSubmit} className="profile__form">
          <div className="profile__input-container">
            {(nameCheck.usernameError) && <span className="profile__input-error">Неправильно введено Имя</span>}
            <label className="profile__label" htmlFor="username">Имя</label>
            <input id="username" name="username" type="text" className="profile__input" value={username} onChange={handleChangeUsername}
                   placeholder="" />
          </div>
          <div className="profile__input-container">
            {(emailCheck.emailError) && <span className="profile__input-error">Неправильно введено email</span>}
            <label className="profile__label" htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" className="profile__input" value={email} onChange={handleChangeEmail}
                   placeholder="" />
          </div>
          {isBadResponse && <span className="profile__submit-error">{badResponseReason}</span>}
          <button disabled={emailCheck.emailError || nameCheck.usernameError || isSameValues} type="submit" className="profile__submit link link_text">Редактировать</button>
          <button type="button" onClick={handleLogOut} className="profile__logout link link_text">Выйти из аккаунта</button>
        </form>
      </section>
    </Fragment>
  )
}

export default Profile
