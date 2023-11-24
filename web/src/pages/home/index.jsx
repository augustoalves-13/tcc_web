import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import audiSlide from '../../assets/images/audi/audiCar.png'
import porscheSlide from '../../assets/images/porsche/porscheCar.png'
import FerrariSlide from '../../assets/images/ferrari/ferrariCar.png'
import LogoPorsche from '../../assets/images/porsche/PorscheLogo.png'
import LogoFerrari from '../../assets/images/ferrari/FerrariLogo.png'
import LogoAudi from '../../assets/images/audi/AudiLogo.png'
import './index.scss'
import HeaderHome from "../../components/web/Headers/HomeHeader";

export default function HomePage() {
  const [title, setTitle] = useState('NEW FERRARI F12');
  const [imgSlide, setImgSlide] = useState(FerrariSlide)
  const [buttonLeft, setButtoLeft] = useState('centro')
  const [classCentro, setClassCentro] = useState('selecionado')
  const [classRight, setClassRight] = useState('label')
  const [classLeft, setClassLeft] = useState('label')
  const [route, setRoute] = useState()

  function mudarPorsche() {
    setTitle('Porsche 911 GT3')
    setImgSlide(porscheSlide)
    setRoute("porsche")
  }

 

  function mudarFerrari() {
    setTitle('NEW FERRARI F12')
    setImgSlide(FerrariSlide)
    setRoute("ferrari")
  }

  function mudarAudi() {
    setTitle('AUDI R8')
    setImgSlide(audiSlide)
    setRoute("audi")
  }

  function changeLeft() {
    if (buttonLeft === 'centro') {
      setButtoLeft('right')
      setClassCentro("label")
      setClassLeft("label")
      setClassRight('selecionado')
    } else if (buttonLeft === 'right') {
      setButtoLeft('left')
      setClassLeft('selecionado')
      setClassCentro("label")
      setClassRight("label")
    } else if (buttonLeft === 'left') {
      setButtoLeft('centro')
      setClassRight("label")
      setClassLeft("label")
      setClassCentro("selecionado")
    }
  }

  function changeRight() {
    if (buttonLeft === 'centro') {
      setButtoLeft('left')
      setClassCentro("label")
      setClassLeft("selecionado")
      setClassRight('label')
    } else if (buttonLeft === 'left') {
      setButtoLeft('right')
      setClassCentro("label")
      setClassLeft("label")
      setClassRight('selecionado')
    } else if (buttonLeft === 'right') {
      setButtoLeft('centro')
      setClassCentro("selecionado")
      setClassLeft("label")
      setClassRight('label')
    }
  }

  function teste(item, centro, right, left) {
    setButtoLeft(item)
    setClassCentro(centro)
    setClassRight(right)
    setClassLeft(left)
  }

  useEffect(()=>{

    function Rotas(){
      if(title == 'Porsche 911 GT3'){
        setRoute('porsche')
      } else if(title == 'NEW FERRARI F12'){
        setRoute('ferrari')
      } else if(title == 'AUDI R8'){
        setRoute('audi')
      }
    }

    Rotas()
  },[])

  return (
    <main className="home-container">
    <HeaderHome rota={route}/>
      <main className="main-content">
        <section className="slider">
          <div className="content-slider">
            <div className="box-txt">
              <h1>{title}</h1>
              <p>Saiba Mais</p>
            </div>
            <img src={imgSlide} />
          </div>
        </section>
        <section className="marcas-container">
          <h1>MARCAS</h1>
          <div className="marcas-content">
            <img className="img" onClick={mudarPorsche} src={LogoPorsche} />
            <img className="img" onClick={mudarFerrari} src={LogoFerrari} />
            <img className="audi" onClick={mudarAudi} src={LogoAudi} />
          </div>
        </section>
        <section className="slider-carros">
          <h1>VEÍCULOS</h1>
          <div className="carrossel">
            <button onClick={changeRight}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="23" viewBox="0 0 13 23" fill="none">
                <path d="M0.828272 10.4374C0.242485 11.0232 0.242485 11.9729 0.828272 12.5587L10.3742 22.1046C10.96 22.6904 11.9097 22.6904 12.4955 22.1046C13.0813 21.5189 13.0813 20.5691 12.4955 19.9833L4.01025 11.498L12.4955 3.01277C13.0813 2.42698 13.0813 1.47723 12.4955 0.891445C11.9097 0.305659 10.96 0.305659 10.3742 0.891445L0.828272 10.4374ZM4.125 9.99805H1.88893V12.998H4.125V9.99805Z" fill="white" />
              </svg>
            </button>
            {buttonLeft === 'centro' &&
              <div className="img-container">
                <img src={imgSlide} />
              </div>
            }
            {buttonLeft === 'left' &&
              <div className="img-container">
                <img src={audiSlide} />
              </div>
            }
            {buttonLeft === 'right' &&
              <div className="img-container">
                <img src={porscheSlide} />
              </div>
            }
            <button onClick={changeLeft}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="23" viewBox="0 0 13 23" fill="none">
                <path d="M12.1795 12.5607C12.7653 11.9749 12.7653 11.0251 12.1795 10.4393L2.6336 0.893398C2.04781 0.307612 1.09807 0.307612 0.512279 0.893398C-0.0735076 1.47918 -0.0735076 2.42893 0.512279 3.01472L8.99756 11.5L0.512279 19.9853C-0.0735076 20.5711 -0.0735076 21.5208 0.512279 22.1066C1.09807 22.6924 2.04781 22.6924 2.6336 22.1066L12.1795 12.5607ZM8.88281 13H11.1189V10H8.88281V13Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className='radius-container'>
            <label onClick={() => teste('left', 'label', 'label', 'selecionado')} className={classLeft}></label>
            <label onClick={() => teste('centro', 'selecionado', 'label', 'label')} className={classCentro}></label>
            <label onClick={() => teste('right', 'label', 'selecionado', 'label')} className={classRight}></label>
          </div>
        </section>
      </main>
    </main>
  );
}
