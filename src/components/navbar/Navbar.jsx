import React from "react";
import { motion } from "framer-motion";
import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span 
                    initial={{opacity: 0, scale: 0.5}} 
                    animate={{opacity: 1, scale:1}} 
                    transition={{duration: 0.5}}
                >
                    Rave Academy
                </motion.span>
                <div className="social">
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/about">About</a>
                    {/* <a href="https://www.instagram.com/rinocodes/"><img src="/dribbble.png" alt="" /></a> */}
                </div>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Navbar;