import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум&#160;х&#160;BeatFilm.</p>
      <div className="footer__content">
        <p className="footer__copyright">&copy;&#160;2022</p>
        <ul className="footer__nav">
          <li className="footer__link">Яндекс.Практикум</li>
          <li className="footer__link">Github</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;