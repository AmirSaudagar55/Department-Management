import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import './LayoutStyle.css'

function Layout() {
  return (
    <>
    <div style={{ background: "var(--black)", overflow: "hidden" }} className="content-container">
      <Navbar />
      <Outlet />
    </div>
    <Footer className="footer--pin"/>
  </>
  )
}

export default Layout
