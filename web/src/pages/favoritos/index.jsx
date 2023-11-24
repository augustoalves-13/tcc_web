import { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
import ProductCard from '../../components/web/ProductCard'
import logo from '../../assets/images/logo.svg'
import ProductsHeader from '../../components/web/Headers/ProductsPageHeader'

const FavotitesPage = () => {
   
   const [favorites, setFavorites] = useState([]);

   useEffect(()=>{
      const storedFav = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFav)
   },[])
    
   return (
      <div>
         <ProductsHeader
            title='Favoritos'
         />
         <h2>Produtos Favoritos</h2>
         {favorites.map((item) => (
            <ProductCard
               key={item.id}
               title={item.nome}
               price={item.valor}
            />
         ))}
      </div>
   );
};

export default FavotitesPage;
