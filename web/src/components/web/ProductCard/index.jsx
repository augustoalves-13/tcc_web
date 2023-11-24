import axios from 'axios'
import './index.scss'
import { useEffect, useState } from 'react'
import logo from '../../../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ img, price, title, onClick, result, onClickCar,item }) => {

   return (
      <section  className="container-card">
      <div onClick={item} className="img-container"> 
            <img src={img} />
         </div>
         <div className="content-container">
            <div className='txt-container'>
               <p className='price-txt'>R$ {price}</p>
               <p className='name-product'>{title}</p>
            </div>
            <div className='btn-container'>
               <button onClick={onClick}>
                  
               </button>
               <button onClick={onClickCar}>
                  
               </button>
            </div>
         </div>
         <p>{result}</p>
      </section>
   )
}

export default ProductCard