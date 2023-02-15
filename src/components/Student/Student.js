import './Student.css';
import {Link} from "react-router-dom";
import PortfolioSite from "./PortfolioSite/PortfolioSite";
import {Sites} from "../../utils/constants";
import Avatar from "../../images/avatar.jpeg";

function Student() {
  return (
    <div className="student">
      <article className="student__info">
        <h3 className="student__name">Александр</h3>
        <p className="student__experience">Фронтенд-разработчик, 33 года</p>
        <p className="student__description">Я&#160;родился и&#160;живу в&#160;Москве,
          закончил факультет государственного и&#160;муниципального управления НИУ-ВШЭ.
          У&#160;меня двое детей. Я&#160;люблю слушать музыку, а&#160;ещё увлекаюсь большим теннисом.
          Начал кодить 3&#160;года назад, в&#160;основном бэкенд разработка. После того,
          как прошёл курс по&#160;веб-разработке, начал заниматься фриланс-заказами и&#160;ушёл
          с&#160;постоянной работы.</p>
        <img className="student__avatar" src={Avatar} alt="avatar"/>
        <Link to="https://github.com/AlexSarva" className="student__github">Github</Link>
      </article>
      <div className="student__portfolio">
        <p className="student__portfolio-title">Портфолио</p>
        <ul className="student__portfolio-sites">
          {Sites.map((site, n) => (
            <PortfolioSite key={n} siteInfo={site}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Student;