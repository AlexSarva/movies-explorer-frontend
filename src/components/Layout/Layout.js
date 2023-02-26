import './Layout.css'
import { Fragment } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout () {
  return (
    <Fragment>
      <Header />
      <div className="layout-content">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  )
}

export default Layout
