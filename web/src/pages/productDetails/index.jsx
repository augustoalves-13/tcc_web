import './index.scss'
import { useEffect, useState } from "react";
import ProductsHeader from "../../components/web/Headers/ProductsPageHeader";
import axios from "axios";
import { ListProductsFromId, SearchImg } from "../../api/produto";
import { useParams } from 'react-router-dom';
import Storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';

const ProductDetails = () => {
    const [product, setProduct] = useState({});

    const {id} = useParams()

    useEffect(() => {
        async function listProduct() {
            try {
                const response = await ListProductsFromId(id);

                setProduct(response);
            } catch (error) {
                console.error("Erro ao obter dados da API:", error);
            }
        }

        listProduct();
    }, []);

    function addToCartLocalStorage() {
        let carrinho = [];
    
        if (Storage("carrinho")) {
            carrinho = Storage('carrinho');
        }
    
        const produtoExistente = carrinho.find(item => item.id === id);
     
        if (!produtoExistente) {
            carrinho.push({
                id: id,
                qtd: 1
            });
    
            Storage("carrinho", carrinho);
    
            toast.dark('Produto adicionado ao carrinho');
        } else {
            toast.warning('Produto já está no carrinho');
        }
    }

    console.log(product.id_produtos)
    

    return (
        <div className="main-details">
            <ProductsHeader title="detalhes" />

            <main className="details-content">
                <section className="first-content">
                    <div className='txt-container'>
                        <h1>{product.nm_modelo}</h1>
                        <div className="box-subtitle">
                            <p>R$: {product.vl_valor}</p>
                            <p>Parcelas em até 10x, sem juros</p>
                        </div>
                        <button onClick={()=>addToCartLocalStorage(product.id_produtos)}>Adicionar ao carrinho</button>
                    </div>

                    <img src={SearchImg(product.img_banner)} />
                </section>

                <section className='description-section'>
                    <h1>Descrição</h1>
                    <p>{product.ds_descricao}</p>
                </section>
            </main>
            <ToastContainer/>
        </div>
    );
};

export default ProductDetails;
