import './NavigationMenu.css';
import '../../../styles/link/link.css';
import Navigation from "../Navigation";

function NavigationMenu(props) {
  return (
    <div className={`nav__menu ${props.isOpen ? "nav__menu_open" : null}`}>
      <Navigation type="vertical"/>
      <button onClick={props.onClose} type="button" className="nav__close-button link"></button>
    </div>
  )
}

export default NavigationMenu;