import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум&#160;х&#160;BeatFilm.</p>
      <div className="footer__content">
        <p className="footer__copyright">&copy;&#160;2023</p>
        <ul className="footer__nav">
          <li className="footer__link">
            <Link to="https://github.com/AlexSarva"
                  className="link link_text" target="_blank"
                  rel="noopener noreferrer">Яндекс.Практикум</Link>
          </li>
          <li className="footer__link">
            <Link to="https://github.com/AlexSarva/movies-explorer-frontend"
                  className="link link_text" target="_blank"
                  rel="noopener noreferrer">Github</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;