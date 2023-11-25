import React, { useState } from 'react'
import "./SignUp.css"
import {Link, useNavigate} from "react-router-dom"
import NavBar from './NavBar'

function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [profession, setProfession] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  let formData ={
    name: name,
    email:email,
    phoneNumber: phoneNumber,
    profession: profession,
    password: password
  } 


  const handleSignUp = () => {
    localStorage.setItem('user', JSON.stringify(formData));
    navigate("/login")
  };

  return (
    <div>
        <NavBar />
        <div className='signup-input-container'>
            <h2 style={{margin: "0", color: "#334155", letterSpacing: "1px"}}>SIGN UP HERE</h2>
            <form className='signup-form'>
              <input className='signup-inputs' type='text' name='name' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} required />
              <input className='signup-inputs' type='email' name='email' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} required />
              <input className='signup-inputs' type="tel" name="phoneNumber" placeholder='Enter Your Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} required />
              <select onChange={(e) => setProfession(e.target.value)} required>
                  <option value="">Select Your Profession</option>
                  <option value="student">Student</option>
                  <option value="working">Working Professional</option>
              </select>
              <input className='signup-inputs' type='password' name='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required />
              {name && email && phoneNumber && profession && password ? <button className='signup-button' onClick={handleSignUp}>sign up</button> : <button className='disabled-signup-button' disabled>sign up</button>}
            </form>
            <p className='signup-para'>Already Have An Account ? <Link style={{textDecoration: "none"}} to="/login"><span>Log In</span></Link></p>
        </div>
    </div>
  )
}

export default SignUp