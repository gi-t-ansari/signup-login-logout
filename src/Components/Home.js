import React from 'react'
import "./Home.css"
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import CompanyInfo from './CompanyInfo'


function Home() {
  return (
    <div className='home-container'>
        <NavBar />
        <div className='home-body'>
            <h1>Welcome to <span className='geeksynergy-text'>GeekSynergy</span></h1>
            <p>We help your business grow by multifolds</p>
            <Link to="/login"><button id='login-button'>Log In</button></Link>
            <Link to="/signup"><button id='signup-button'>Sign Up</button></Link>
        </div>
        <CompanyInfo />
    </div>
  )
}

export default Home