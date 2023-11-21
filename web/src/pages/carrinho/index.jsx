import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ProductsHeader from '../../components/web/Headers/ProductsPageHeader';
import Storage from 'local-storage';
import { searchFromId } from '../../api/produto';
import './index.scss'
import CarrinhoCard from '../../components/web/Carrinho';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const [itens , setItens] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{

        async function ListProducts(){
            const carrinho = Storage('carrinho')
            
            if(carrinho){
                let temp = []
                
                for(let produto of carrinho){
                    let p = await searchFromId(produto.id)
                    
                    temp.push(...itens , {
                        produto: p,
                        qtd: produto.qtd
                    })
                }
                
                setItens(temp)
                console.log(temp)
            }
            
        }



        ListProducts()

    },[])

        
    return (
        <div className="container-carrinho">
            <ProductsHeader title="Carrinho" />
            <div className="cart-items">
            {itens.map((item, index) => (
                <CarrinhoCard
                    id={item.produto.id_produtos}
                    key={item.produto.id_produto}
                    title={item.produto.nm_modelo}
                />        
            ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default CartPage;
