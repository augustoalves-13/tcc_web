import { useState } from "react";
import './index.scss';
import axios from "axios";
import img2 from '../../../assets/images/galeria/scuderia.png';
import imgs from '../../../assets/images/galeria/seta.png';
import imgg from '../../../assets/images/galeria/corvette/covette-1.png';
import iimg from '../../../assets/images/galeria/corvette/covette-8.png';
import imgt from '../../../assets/images/galeria/corvette/covette-5.png';
import imgf from '../../../assets/images/galeria/corvette/covette-6.png';
import imgl from '../../../assets/images/galeria/corvette/covette-7.png';

export default function Galeriacovette() {

     return(

        <div className='pagina-galeriacovette'>

        <div className='cabecalho'>
            <h1>GALERIA COVETTE</h1>
            <img className='img2' src={img2} alt='' />
        </div>

        <div className='seta'>
            <img className='imgs' src={imgs} alt='' />
        </div>

        <div className='f-ft'>
            <h2>GALERIA COVETTE</h2>
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