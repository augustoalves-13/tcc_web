import './index.scss'
import { useEffect, useState } from "react";
import ProductsHeader from "../../components/web/Headers/ProductsPageHeader";
import axios from "axios";
import { ListProductsFromId, SearchImg, listAllProducts, searchFromId } from "../../api/produto";
import { useParams } from 'react-router-dom';
import Storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '../../components/web/ProductCard';
import { listar } from '../../api/enderecoAPI';
import HeaderHome from '../../components/web/Headers/HomeHeader';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [fav, setFav] = useState(false)
    const [produto, setProduto] = useState([])
    const { id } = useParams()


    

    async function listProduct() {
        try {
            const response = await ListProductsFromId(id);

            setProduct(response);
        } catch (error) {
            console.error("Erro ao obter dados da API:", error);
        }
    }

    async function ListarTodosProdutos() {
        const response = await listAllProducts()
        console.log(response)
        setProduto(response)
    }

    useEffect(() => {
        ListarTodosProdutos()
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


    const addToFavorite = () => {
        if (fav === true) {
            setFav(false)
            toast.dark('Produto removido dos favoritos')
        } else if (fav === false) {
            setFav(true)
            toast.dark('Produto adicionado dos favoritos')
        }
    }

    console.log(product.id_produtos)


    return (
        <div className="main-details">
            <HeaderHome/>
            <main className="details-content">
                <section className="first-content">
                    <div className='txt-container'>
                        <h1>{product.nm_modelo}</h1>
                        <div className="box-subtitle">
                            <p>R$: {product.vl_valor}</p>
                            <p>Parcelas em até 10x, sem juros</p>
                        </div>
                        <div className="button-container">
                            <button className='add-cart' onClick={() => addToCartLocalStorage(product.id_produtos)}>Adicionar ao carrinho</button>

                            <button onClick={addToFavorite} className='add-fav'>
                                {!fav &&
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }

                                {fav == true &&
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff0000">
                                        <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" stroke="none" fill='#ff0000' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                            </button>
                        </div>
                    </div>

                    <img src={SearchImg(product.img_banner)} />
                </section>

                <section className='description-section'>
                    <h1>Descrição</h1>
                    <p>{product.ds_descricao}</p>
                </section>
                <section className="list-favorites">
                    <h1>PRODUTOS RELACIONADOS</h1>

                    <Swiper
                        slidesPerView={3}
                        pagination={{ clickable: true }}

                    >
                        <div className="products-container">
                            {produto.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <ProductCard
                                        title={item.nome}
                                        price={item.valor}
                                    />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </section>
            </main>
            <ToastContainer />
        </div>
    );
};

export default ProductDetails;
