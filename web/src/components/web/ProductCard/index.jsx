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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" fill='#fff' />
                  </svg>
               </button>
               <button onClick={onClickCar}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
                     <path d="M11 1.5C11.9946 1.5 12.9484 1.89509 13.6517 2.59835C14.3549 3.30161 14.75 4.25544 14.75 5.25V6H7.25V5.25C7.25 4.25544 7.64509 3.30161 8.34835 2.59835C9.05161 1.89509 10.0054 1.5 11 1.5ZM16.25 6V5.25C16.25 3.85761 15.6969 2.52226 14.7123 1.53769C13.7277 0.553123 12.3924 0 11 0C9.60761 0 8.27226 0.553123 7.28769 1.53769C6.30312 2.52226 5.75 3.85761 5.75 5.25V6H0.5V21C0.5 21.7956 0.816071 22.5587 1.37868 23.1213C1.94129 23.6839 2.70435 24 3.5 24H18.5C19.2956 24 20.0587 23.6839 20.6213 23.1213C21.1839 22.5587 21.5 21.7956 21.5 21V6H16.25Z" fill="white" />
                  </svg>
               </button>
            </div>
         </div>
         <p>{result}</p>
      </section>
   )
}

export default ProductCard