import { useState } from "react";
import './index.scss';
import axios from "axios";

import img2 from '../../../assets/images/galeria/scuderia.png';
import imgs from '../../../assets/images/galeria/seta.png';
import imgg from '../../../assets/images/galeria/audi/audi01.png';
import iimg from '../../../assets/images/galeria/audi/audi-2.png';
import imgt from '../../../assets/images/galeria/audi/audi-3.png';
import imgf from '../../../assets/images/galeria/audi/audi-04.png';
import imgl from '../../../assets/images/galeria/audi/audi-5.png';



export default function Galeriaaudi() {

     return(

        <div className='pagina-galeriaAudi'>

        <div className='cabecalho'>
            <h1>GALERIA</h1>
            <img className='img2' src={img2} alt='' />
        </div>

        <div className='seta'>
            <img className='imgs' src={imgs} alt='' />
        </div>

        <div className='f-ft'>
            <h2>GALERIA AUDI</h2>
                <div className='d-img'>
                    <img className='imgg' src={imgg}  alt='' />
                    <img className='iimg' src={iimg}  alt='' />
                </div>
                <div className="linha"></div>
                <img className='imgt' src={imgt}  alt='' />
                <img className='imgf' src={imgl}  alt='' />
                <img className='imgl' src={imgf}  alt='' />
                
                
          </div>


</div>

     )   

}