import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/web/ProductCard';
import './index.scss';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Storage from 'local-storage';
import ProductsHeader from '../../components/web/Headers/ProductsPageHeader';
import { useNavigate } from 'react-router-dom';

const ProductPageFront = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);
   const [favorites, setFavorites] = useState([]);

   const navigate = useNavigate();

   useEffect(() => {
      async function ListarProdutos() {
         const response = await axios.get('http://localhost:5000/admin/produtos');
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


   return (
      <div className="container-main">
         <ProductsHeader title="Produtos" />
         <main className="main-content">
            {products.map((item, index) => (
               <ProductCard
                  item={()=>openDetails(index)}
                  key={item.id}
                  title={item.nome}
                  price={item.valor}
                  img={item.img}
                  isFavorite={favorites.includes(item.id)} 
                  onClick={() => addToFavoritesStorage(item)}
                  onClickCar={()=>addToCartLocalStorage(item.id)}
               />
            ))}
         </main>
         <ToastContainer />
      </div>
   );
};

export default ProductPageFront;
