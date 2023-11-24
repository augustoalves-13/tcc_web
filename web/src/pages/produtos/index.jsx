import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/web/ProductCard';
import './index.scss';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Storage from 'local-storage';
import ProductsHeader from '../../components/web/Headers/ProductsPageHeader';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../api/config';
import Rodape from '../../components/web/Footer'
import HeaderHome from '../../components/web/Headers/HomeHeader';

const ProductPageFront = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);
   const [favorites, setFavorites] = useState([]);

   const navigate = useNavigate();

   useEffect(() => {
      async function ListarProdutos() {
         const response = await axios.get('http://129.148.42.252:5032/admin/produtos');
         console.log(response.data)
         setProducts(response.data);
      }

      ListarProdutos();

      if (!Storage('user-logado')) {
         navigate('/');
      }

      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFavorites);
   }, [navigate]);

   function addToFavoritesStorage(product) {
      const existingFav = JSON.parse(localStorage.getItem('favorites')) || [];
      const newFavorite = [...existingFav, product];
      localStorage.setItem("favorites", JSON.stringify(newFavorite));
      setFavorites(newFavorite)
      toast.dark('Produto Adiciona aos favoritos')
   }

   function addToCartLocalStorage(id) {

      const carrinho = []

      if (Storage("carrinho")) {
         carrinho = Storage('carrinho')
      }

      if (!carrinho.find(item => item.id === id)) {
         carrinho.push({
            id: id,
            qtd: 1
         })
      }

      toast.dark('Produto adicionado ao carrinho');
   }

   

   function openDetails (id){
      navigate('/produto/' +(id+1)+ '/detalhes')
   }

   function showImg(image){
      return API_URL +'/'+image 
   }

   return (
      <div className="container-main">
         <HeaderHome/>
         <main className="main-content">
            {products.map((item, index) => (
               <ProductCard
                  item={()=>openDetails(index)}
                  key={item.id}
                  title={item.nome}
                  price={item.valor}
                  img={showImg(item.img)}
                  isFavorite={favorites.includes(item.id)} 
                  onClick={() => addToFavoritesStorage(item)}
                  onClickCar={()=>addToCartLocalStorage(item.id)}
               />
            ))}
         </main>
         <Rodape/>
         <ToastContainer />
      </div>
   );
};

export default ProductPageFront;
