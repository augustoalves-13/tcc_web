import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ProductsHeader from '../../components/web/Headers/ProductsPageHeader';
import Storage from 'local-storage';
import { searchFromId } from '../../api/produto';
import './index.scss'
import CarrinhoCard from '../../components/web/Carrinho';
import { useNavigate } from 'react-router-dom';
import HeaderHome from '../../components/web/Headers/HomeHeader';

const CartPage = () => {
    const [itens, setItens] = useState([])
    const navigate = useNavigate()

    function CalcTotalValue(q) {
        let total = 0

        for (let item of itens) {
            total = total + item.produto.vl_valor * item.qtd
        }
        return total
    }

    function removeItem(id) {
        let carrinho = Storage("carrinho")
        carrinho = carrinho.filter(item => item.id != id)

        Storage('carrinho', carrinho)
        ListProducts()
    }

    async function ListProducts() {
        const carrinho = Storage('carrinho')

        if (carrinho) {
            let temp = []

            for (let produto of carrinho) {
                let p = await searchFromId(produto.id)

                temp.push({
                    produto: p,
                    qtd: produto.qtd
                })
            }

            setItens(temp)
        }

    }


    useEffect(() => {
        ListProducts()
    }, [])

    return (
        <div className="container-carrinho">
            <HeaderHome />
            <section>
                <div className="cart-items">
                    {itens.map(item => (
                        <CarrinhoCard item={item} removeItem={removeItem} ListProducts={ListProducts} />
                    ))}
                </div>
                <div className="side-cart">
                    <div>
                        <h1>Total</h1>
                        <p>({itens.length} Item)</p>
                        <p>R$ {CalcTotalValue()}</p>
                    </div>
                    <button onClick={() => navigate("/pedido")}>Fechar Pedido</button>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default CartPage;
