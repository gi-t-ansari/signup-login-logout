import React, {useState} from 'react'
import "./Login.css"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar'

function Login({}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate();

    const handleLogin = () => {
      const storedUserData = JSON.parse(localStorage.getItem('user'))

      if (storedUserData.email === email && storedUserData.password === password) {
        navigate("/dashboard")
      } else {
        alert('Invalid Credentials');
      }

    }

  return (
    <div>
        <NavBar />
        <div className='login-input-container'>
            <h2 style={{margin: "0", color: "#334155", letterSpacing: "1px"}}>LOG IN HERE</h2>
            <input className='login-inputs' type='email' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} value={email} required />
            <input className='login-inputs' type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} required />
            {email && password ? <button className='login-button' onClick={handleLogin}>Log In</button> : <button className='disabled-login-button' disabled>Log In</button>}
            <p className='login-para'>New User ? <Link style={{textDecoration: "none"}} to="/"><span>Sign Up</span></Link></p>
        </div>
    </div>
  )
}

export default Login