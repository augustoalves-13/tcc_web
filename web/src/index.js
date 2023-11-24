import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ControleMarcas from './pages/adm/Marcas';
import ProductPage from './pages/adm/Produtos';
import ProductPageFront from './pages/produtos';
import FavotitesPage from './pages/favoritos';
import CarPage from './pages/carrinho';
import LoginPage from './pages/login';
import ProductDetails from './pages/productDetails';
import HomePage from './pages/home';
import GaleriaFerrari from './pages/galeria/galeriaferrari';
import Galerialamborghini from './pages/galeria/galerialamborghini';
import Galeriamclaren from './pages/galeria/galeriamclaren';
import Galeriaporsche from './pages/galeria/galeriaporsche';
import Galeriabugatti from './pages/galeria/galeriabugatti';
import Galeriaalfaromeo from './pages/galeria/galeriaalfaromeo';
import Galeriaastonmartin from './pages/galeria/galeriaastonmartin';
import Galeriaaudi from './pages/galeria/galeriaaudi';
import Galeriacorvette from './pages/galeria/galeriacorvette';

import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'react-toastify/dist/ReactToastify.css';
import PedidoPage from './pages/pedido';
import { ToastContainer } from 'react-toastify';
import LoginAdm from './pages/adm/LoginAdm';
import ThanksPage from './pages/Agradecimento';



register()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/admin' element={<LoginAdm />} />
      <Route path='/admin/marcas' element={<ControleMarcas />} />
      <Route path='/admin/produtos' element={<ProductPage />} />
      <Route path='/produtos' element={<ProductPageFront />} />
      <Route path='/favoritos' element={<FavotitesPage />} />
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/carrinho' element={<CarPage />} />
      <Route path='/produto/:id/detalhes' element={<ProductDetails />} />
      <Route path='/pedido' element={<PedidoPage />} />
      <Route path='/pedido/fechar' element={<ThanksPage />} />

      <Route path='/galeria/ferrari' element={<GaleriaFerrari />} />
      <Route path='/galeria/alfaromeo' element={<Galeriaalfaromeo />} />
      <Route path='/galeria/lamborghini' element={<Galerialamborghini />} />
      <Route path='/galeria/mclaren' element={<Galeriamclaren />} />
      <Route path='/galeria/bugatti' element={<Galeriabugatti />} />
      <Route path='/galeria/porsche' element={<Galeriaporsche />} />
      <Route path='/galeria/astonmartin' element={<Galeriaastonmartin />} />
      <Route path='/galeria/audi' element={<Galeriaaudi />} />
      <Route path='/galeria/corvette' element={<Galeriacorvette />} />
    </Routes>
    <ToastContainer />
  </BrowserRouter>
);