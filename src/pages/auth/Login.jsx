import React from 'react'
import "./login.scss"
import { FaUser, FaLock } from "react-icons/fa"
import Navbar from '../../components/navbar/Navbar'

const Login = () => {
  return (
    <>
    <Navbar />
    <div className='login'>
      <div className="wrapper">

        <form action=''>
          <h1>Login</h1>
          <div className="input-box">
              <input type="email" name="" id="" placeholder='Email' required />
              <FaUser className='icon' />
          </div>

          <div className="input-box">
              <input type="password" name="" id="" placeholder='Password' required />
              <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
              <label>
                  <input type="checkbox" />Remember me
              </label>
              <a href="#">Forgot Password</a>
          </div>

          <button type='submit'>Login</button>

          <div className="register-link">
              <p>Dont have an account? <a href="/register">Register</a></p>
          </div>

        </form>

      </div>
    </div>
    </>
  )
}

export default Login
