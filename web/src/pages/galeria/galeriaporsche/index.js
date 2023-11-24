import { useState } from "react";
import './index.scss';
import axios from "axios";

import img2 from '../../../assets/images/galeria/scuderia.png';
import imgs from '../../../assets/images/galeria/seta.png';
import imgg from '../../../assets/images/galeria/porsche/porsche-1.png';
import iimg from '../../../assets/images/galeria/porsche/porsche-2.png';
import imgt from '../../../assets/images/galeria/porsche/porsche-3.png';
import imgf from '../../../assets/images/galeria/porsche/Rectangle 18.png';
import imgl from '../../../assets/images/galeria/porsche/porsche-6.png';

export default function GaleriaPorsche() {

     return(

        <div className='pagina-galeriaporsche'>

        <div className='cabecalho'>
            <h1>GALERIA</h1>
            <img className='img2' src={img2} alt='' />
        </div>

        <div className='seta'>
            <img className='imgs' src={imgs} alt='' />
        </div>

        <div className='f-ft'>
            <h2>GALERIA PORSCHE</h2>
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