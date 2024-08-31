import React from 'react'
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Products from './pages/products/Products';
import About from './pages/products/about/About';
import Login from './pages/auth/Login';
import Signup from './pages/auth/SignUp';

const Routeing = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
        </Routes>
    </>
  )
}

export default Routeing
