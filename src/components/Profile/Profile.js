import './Profile.css'
import '../../styles/link/link.css'
import Header from '../Header/Header'
import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'

function Profile () {
  const [username, setUsername] = useState('Александр')
  const [email, setEmail] = useState('test@test.ru')
  const { user, signout, patchUser } = useAuth()
  const navigate = useNavigate()

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    patchUser({ name: username, email })
  }

  const handleLogOut = () => {
    signout(() => navigate('/', { replace: true }))
  }

  useEffect(() => {
    setUsername(user.name)
    setEmail(user.email)
  }, [user])

  return (
    <Fragment>
      <Header />
      <section className="profile">
        <h2 className="profile__title">{`Привет, ${user.name}!`}</h2>
        <form onSubmit={handleSubmit} className="profile__form">
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="username">Имя</label>
            <input id="username" name="username" type="text" className="profile__input" value={username} onChange={handleChangeUsername}
                   placeholder="" required minLength="6" maxLength="40"/>
          </div>
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" className="profile__input" value={email} onChange={handleChangeEmail}
                   placeholder="" required minLength="6" maxLength="40"/>
          </div>
          <button type="submit" className="profile__submit link link_text">Редактировать</button>
          <button type="button" onClick={handleLogOut} className="profile__logout link link_text">Выйти из аккаунта</button>
        </form>
      </section>
    </Fragment>
  )
}

export default Profile
