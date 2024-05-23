import React from 'react'
import './style.css'
import Logo from '../Logo'
import { navbarLink } from '../../utils/dummyData'
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <Logo />
        <div className="navbar-link">
          {navbarLink.map((item) => (
            <a>{item}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
