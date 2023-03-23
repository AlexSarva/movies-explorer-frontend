import './LandingHeader.css'
import '../../../styles/link/link.css'
import Logo from '../../Logo/Logo'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../hook/useAuth'
import Navigation from '../../Navigation/Navigation'
import { Fragment, useState } from 'react'
import NavigationMenu from '../../Navigation/NavigationMenu/NavigationMenu'

function LandingHeader () {
  const { isAuthenticated } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="landing-header">
      <Logo area="landing-header"/>
      <nav className="landing-header__nav">
        {isAuthenticated && <button onClick={openMenu} type="button" className={'header__menu link'}></button>}
        {isAuthenticated
          ? <Fragment>
            <Navigation onChoose={closeMenu} type="header" />
            <NavigationMenu isOpen={isMenuOpen} onClose={closeMenu} />
          </Fragment>
          : <ul className="landing-header__nav-list" >
          <li className="landing-header__nav-element landing-header__nav-element_type_register">
            <Link to="/signup" className="link link__text-color_white">Регистрация</Link>
          </li>
          <li className="landing-header__nav-element landing-header__nav-element_type_login">
            <Link to="/signin" className="link link__text-color_black">Войти</Link>
          </li>
        </ul>}
      </nav>
    </header>
  )
}

export default LandingHeader
