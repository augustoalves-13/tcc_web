import { useState } from "react";
import './index.scss';
import axios from "axios";

import img2 from '../../../assets/images/galeria/scuderia.png';
import imgs from '../../../assets/images/galeria/seta.png';
import imgg from '../../../assets/images/galeria/lamborghini/image-1.png';
import iimg from '../../../assets/images/galeria/lamborghini/lamburghini-7.png';
import imgt from '../../../assets/images/galeria/lamborghini/image-3.png';
import imgf from '../../../assets/images/galeria/lamborghini/image- 4.png';
import imgl from '../../../assets/images/galeria/lamborghini/imga-5.png';

export default function GaleriaLamborghini() {

     return(

        <div className='pagina-galeriaLamborghini'>

        <div className='cabecalho'>
            <h1>GALERIA</h1>
            <img className='img2' src={img2} alt='' />
        </div>

        <div className='seta'>
            <img className='imgs' src={imgs} alt='' />
        </div>

        <div className='f-ft'>
            <h2>GALERIA LAMBORGHINI</h2>
                <div className='d-img'>
                    <img className='imgg' src={imgg} alt='' />
                    <img className='iimg' src={iimg} alt='' />
                </div>
                <div className="linha"></div>
                <img className='imgt' src={imgt} alt='' />
                <div className="linha"></div>
                <img className='imgf' src={imgf} alt='' />
                <div className="linha"></div>
                <img className='imgl' src={imgl} alt='' />
                
                
          </div>


</div>

     )   

}