import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../Assets/logo.jpg"
import "./Dashboard.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Dashboard() {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    let navigate = useNavigate();

    const logOut = () => {
        localstorage.clear()
        navigate("/")
    }


  return (
    <div>
        <nav className='navbar-container'>
          <div className='logo-container'>
            {/* <Link to="/"><img className='logo' src={logo} alt='logo' /></Link> */}
            Some Logo
          </div>            
          <div className='user' >
            <AccountCircleIcon />
            <span>{storedUserData.name}</span>
            <button onClick={logOut} id='logout-button'>Logout</button>
            <p className='contact-info'>Company Info</p>
          </div>
        </nav>
        <h1 style={{textAlign: "center"}}>Welcome {storedUserData.name}</h1>
    </div>
  )
}

export default Dashboard
