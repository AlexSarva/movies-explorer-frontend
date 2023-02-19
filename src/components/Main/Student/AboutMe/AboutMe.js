import Avatar from '../../../../images/avatar1.png'
import '../../../../styles/link/link.css'
import { Link } from 'react-router-dom'

function AboutMe () {
  return (
    <article className="student__info">
      <img className="student__avatar" src={Avatar} alt="avatar"/>
      <h3 className="student__name">Александр</h3>
      <p className="student__experience">Фронтенд-разработчик, 33 года</p>
      <p className="student__description">Я&#160;родился и&#160;живу в&#160;Москве,
        закончил факультет государственного и&#160;муниципального управления НИУ-ВШЭ.
        У&#160;меня двое детей. Я&#160;люблю слушать музыку, а&#160;ещё увлекаюсь большим теннисом.
        Начал кодить 3&#160;года назад, в&#160;основном бэкенд разработка. После того,
        как прошёл курс по&#160;веб-разработке, начал заниматься фриланс-заказами и&#160;ушёл
        с&#160;постоянной работы.</p>
      <Link to="https://github.com/AlexSarva"
            className="student__github link" target="_blank"
            rel="noopener noreferrer">Github</Link>
    </article>
  )
}

export default AboutMe
