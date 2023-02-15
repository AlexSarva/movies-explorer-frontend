import './Lead.css';
import LeadImage from '../../images/globus.svg';

function Lead() {
  return  (
    <section className="lead">
      <h1 className="lead__title">Учебный проект студента факультета Веб&zwj;-&zwj;разработки.</h1>
      <a className="lead__subtitle">Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.</a>
      <button type="button" className="lead__button">Узнать больше</button>
      <img className="lead__image" src={LeadImage} alt="globus"/>
    </section>
  )
}

export default Lead;