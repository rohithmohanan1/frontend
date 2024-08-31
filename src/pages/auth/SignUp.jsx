import React from 'react'
import "./login.scss"
import { FaUser, FaLock } from "react-icons/fa"
import Navbar from '../../components/navbar/Navbar'

const Signup = () => {
  return (
    <>
    <Navbar />
    <div className='login'>
      <div className="wrapper">

        <form action=''>
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" name="" id="" placeholder='First Name' required />
                {/* <FaUser className='icon' /> */}
            </div>

            <div className="input-box">
                <input type="text" name="" id="" placeholder='Last Name' required />
                {/* <FaUser className='icon' /> */}
            </div>

            <div className="input-box">
                <input type="date" name="" id="" placeholder='Date of Birth' required />
                {/* <FaUser className='icon' /> */}
            </div>

            <div className="input-box">
                <input type="email" name="" id="" placeholder='Email' required />
                {/* <FaUser className='icon' /> */}
            </div>

            <div className="input-box">
                <input type="text" name="" id="" placeholder='mobile no' required />
                {/* <FaLock className='icon' /> */}
            </div>

            <div className="input-box">
                <input type="password" name="" id="" placeholder='password' required />
                {/* <FaLock className='icon' /> */}
            </div>

            {/* <div className="remember-forgot">
                <label>
                    <input type="checkbox" />Remember me
                </label>
                <a href="#">Forgot Password</a>
            </div> */}

            <button type='submit'>Register</button>

            <div className="register-link">
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>

        </form>

      </div>
    </div>
    </>
  )
}

export default Signup
