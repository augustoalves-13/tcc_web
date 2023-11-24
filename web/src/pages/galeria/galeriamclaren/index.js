import { useState } from "react";
import './index.scss';
import axios from "axios";

import img2 from '../../../assets/images/galeria/scuderia.png';
import imgs from '../../../assets/images/galeria/seta.png';
import imgg from '../../../assets/images/galeria/mclaren/mclaren-02.png';
import iimg from '../../../assets/images/galeria/mclaren/mclaren-01.png';
import imgt from '../../../assets/images/galeria/mclaren/mclad.png';
import imgf from '../../../assets/images/galeria/mclaren/mclaren-4.png';
import imgl from '../../../assets/images/galeria/mclaren/mclaren-5.png';

export default function GaleriaMclaren() {

     return(

        <div className='pagina-galeriaMclaren'>

        <div className='cabecalho'>
            <h1>GALERIA</h1>
            <img className='img2' src={img2} alt='' />
        </div>

        <div className='seta'>
            <img className='imgs' src={imgs} alt='' />
        </div>

        <div className='f-ft'>
            <h2>GALERIA MC LAREN</h2>
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