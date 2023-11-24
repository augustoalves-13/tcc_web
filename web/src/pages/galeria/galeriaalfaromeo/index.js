import { useState } from "react";
import './index.scss';
import axios from "axios";

import img2 from '../../../assets/images/galeria/scuderia.png';
import img1 from '../../../assets/images/galeria/seta.png';
import img3 from '../../../assets/images/galeria/alfa/alfss.png';
import img4 from '../../../assets/images/galeria/alfa/alfaa.png';
import img5 from '../../../assets/images/galeria/alfa/alfa-3.png';
import img6 from '../../../assets/images/galeria/alfa/alfaaa.png';
import img7 from '../../../assets/images/galeria/alfa/aaaaa.png';


export default function Galeriaalfaromeo() {

     return(

        <div className='pagina-galeriaalfaromeo'>

        <div className='cabecalho'>
            <h1>GALERIA</h1>
            <img className='img2' src={img2} alt='' />
        </div>

        <div className='seta'>
            <img className='imgs' src={img1}  alt='' />
        </div>

        <div className='f-ft'>
            <h2>GALERIA ALFA ROMEO</h2>
                <div className='d-img'>
                    <img className='imgg'  src={img3} alt='' />
                    <img className='iimg' src={img4} alt='' />
                </div>
                <div className="linha"></div>
                <img className='imgt' src={img5} alt='' />
                <img className='imgf' src={img6} alt='' />
                <img className='imgl' src={img7} alt='' />
                
                
          </div>


</div>

     )   

}