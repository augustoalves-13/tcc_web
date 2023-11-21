import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ControleMarcas from './pages/adm/Marcas';
import ProductPage from './pages/adm/Produtos';
import ProductPageFront from './pages/produtos';
import FavotitesPage from './pages/favoritos';
import CarPage from './pages/carrinho';
import LoginPage from './pages/login';
import ProductDetails from './pages/productDetails';
import HomePage from './pages/home';

import {register} from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'react-toastify/dist/ReactToastify.css';
import PedidoPage from './pages/pedido';



register()

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/admin/marcas' element={<ControleMarcas/>}/>
      <Route path='/admin/produtos' element={<ProductPage/>} />
      <Route path='/produtos' element={<ProductPageFront/>} />
      <Route path='/favoritos' element={<FavotitesPage/>} />
      <Route path='/' element={<LoginPage/>} />
      <Route path='/home' element={<HomePage/>} />
      <Route path='/carrinho' element={<CarPage/>} />
      <Route path='/produto/:id/detalhes' element={<ProductDetails/>} />
      <Route path='/pedido' element={<PedidoPage/>} />
    </Routes>
  </BrowserRouter>
);