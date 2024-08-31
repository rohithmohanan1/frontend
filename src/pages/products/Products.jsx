import React from 'react'
import "./products.scss"
import Navbar from '../../components/navbar/Navbar'

const Products = () => {
  return (
    <div className='products'>
        <Navbar />
        <div className="product-cards">
            <div className="product-card">
                <img src="/" alt="image" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit qui perspiciatis dolores quaerat dicta quisquam distinctio bea</p>
                <span>Name</span>
            </div>
            <div className="product-card">
                <img src="/" alt="image" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit qui perspiciatis dolores quaerat dicta quisquam distinctio bea</p>
                <span>Name</span>
            </div>
            <div className="product-card">
                <img src="/" alt="image" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit qui perspiciatis dolores quaerat dicta quisquam distinctio bea</p>
                <span>Name</span>
            </div>
            <div className="product-card">
                <img src="/" alt="image" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit qui perspiciatis dolores quaerat dicta quisquam distinctio bea</p>
                <span>Name</span>
            </div>
            <div className="product-card">
                <img src="/" alt="image" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit qui perspiciatis dolores quaerat dicta quisquam distinctio bea</p>
                <span>Name</span>
            </div>
        </div>
    </div>
  )
}

export default Products
