import './Promo.css'
import '../../../styles/link/link.css'
import LeadImage from '../../../images/globus.svg'
import PromoNav from './PromoNav/PromoNav'
import { useState } from 'react'

function Promo () {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб&zwj;-&zwj;разработки.</h1>
      <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.</p>
      <button onClick={handleOpen} type="button" className="promo__button">
        <span className="promo__button-text">Узнать больше</span>
        <PromoNav isOpen={isOpen} onMouseLeave={handleClose} />
      </button>
      <img className="promo__image" src={LeadImage} alt="globus"/>
    </section>
  )
}

export default Promo
