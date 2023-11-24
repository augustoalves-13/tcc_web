import { useState } from "react";
import './index.scss';
import axios from "axios";

import img2 from '../../../assets/images/galeria/scuderia.png';
import imgs from '../../../assets/images/galeria/seta.png';
import imgg from '../../../assets/images/galeria/ferrari/img01.png';
import iimg from '../../../assets/images/galeria/ferrari/img02.png';
import imgt from '../../../assets/images/galeria/ferrari/ferrari f40-1.png';
import imgf from '../../../assets/images/galeria/ferrari/ferrari f40-3.png';
import imgl from '../../../assets/images/galeria/ferrari/ferrari f40-2.png';

export default function GaleriaFerrari() {

     return(

        <div className='pagina-galeriaFerrari'>

        <div className='cabecalho'>
            <h1>GALERIA</h1>
            <img className='img2' src={img2} alt='' />
        </div>

        <div className='seta'>
            <img className='imgs' src={imgs} alt='' />
        </div>

        <div className='f-ft'>
            <h2>GALERIA FERRARI</h2>
                <div className='d-img'>
                    <img className='imgg' src={imgg} alt='' />
                    <img className='iimg' src={iimg} alt='' />
                </div>
                <div className="linha"></div>
                <img className='imgt' src={imgt} alt='' />
                <img className='imgf' src={imgf} alt='' />                
                <img className='imgl' src={imgl} alt='' />

          </div>


</div>

     )   

}