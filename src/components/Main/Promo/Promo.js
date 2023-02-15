import './Promo.css';
import LeadImage from '../../../images/globus.svg';

function Promo() {
  return  (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб&zwj;-&zwj;разработки.</h1>
      <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.</p>
      <button type="button" className="promo__button">Узнать больше</button>
      <img className="promo__image" src={LeadImage} alt="globus"/>
    </section>
  )
}

export default Promo;