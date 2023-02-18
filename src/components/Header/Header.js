import './Header.css';
import '../../styles/link/link.css';
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import NavigationMenu from "../Navigation/NavigationMenu/NavigationMenu";
import {useState} from "react";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <Logo area="header"/>
      <Navigation type="horizontal"/>
      <button onClick={openMenu} type="button" className={`header__menu link`}></button>
      <NavigationMenu isOpen={isMenuOpen} onClose={closeMenu}/>
    </header>
  )
}

export default Header;