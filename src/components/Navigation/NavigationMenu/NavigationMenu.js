import './NavigationMenu.css'
import '../../../styles/link/link.css'
import Navigation from '../Navigation'
import { useEffect } from 'react'

function NavigationMenu (props) {
  useEffect(() => {
    function handleEscapeKey (evt) {
      if (evt.key === 'Escape') {
        props.onClose()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [props])

  return (
    <div className={`nav-menu ${props.isOpen ? 'nav-menu_open' : null}`}>
      <Navigation onChoose={props.onClose} type="vertical"/>
      <button onClick={props.onClose} type="button" className="nav-menu__close-button link"></button>
    </div>
  )
}

export default NavigationMenu
