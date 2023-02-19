import './Main.css'
import LandingHeader from './LandingHeader/LandingHeader'
import Promo from './Promo/Promo'
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'
import Student from './Student/Student'
import Footer from '../Footer/Footer'

function Main () {
  return (
    <main className="main">
      <LandingHeader />
      <Promo />
      <AboutProject />
      <Techs />
      <Student />
      <Footer />
    </main>
  )
}

export default Main
