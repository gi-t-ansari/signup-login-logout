import React from 'react'
import "./NavBar.css"
import logo from "../Assets/logo.jpg"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar-container'>
        <div className='logo-container'>
            {/* <Link to="/"><img className='logo' src={logo} alt='logo' /></Link> */}
            Some Logo
        </div>            
        <div>
            <p className='contact-info'>Company Info</p>
        </div>
    </nav>
  )
}

export default NavBar