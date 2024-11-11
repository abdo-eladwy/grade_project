import React from 'react'
import { Link } from 'react-router-dom'
// import LoginRegister from './LoginRegister'

export default function Register() {
  return (
    <div className="register-page contener col-12  content d-flex flex-column align-items-center justify-content-center">
  
      <div className="col-12  col-md-4  content d-flex flex-column gap-4 justify-content-center align-content-center">
        <h2 style={{color:'#00cba9'}}> welcome!</h2>
        <div className="inputs d-flex flex-column gap-3">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password " />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button className="  text-white ">Sign Up</button>
        <div className="iy  d-flex justify-content-center align-items-center  flex-md-row  gap-md-2">
          <p>Already have an account?</p>
          <Link to='/Login'>Sign in</Link>
        </div>
      </div>
    </div>
  )
}