import { useEffect, useState } from "react";
import HeaderHome from "../../components/web/Headers/HomeHeader";
import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react'
import logo from '../../assets/images/scuderiaLogo.svg'
import axios from "axios";
import ProductCard from "../../components/web/ProductCard";

const HomePage = () => {
    const [title, setTitle] = useState("New Ferrari 911");
    const [products, setProducts] = useState([])

    const marcasData = [
        { name: "PORSCHE", image: "image_path_porsche" },
        { name: "FERRARI", image: "image_path_ferrari" },
        { name: "MCLaren", image: "image_path_mclaren" },
        { name: "AUDI", image: "image_path_audi" },
        { name: "ASTON MARTIN", image: "image_path_aston_martin" },
        { name: "BMW", image: "image_path_bmw" },
    ];

    

    const filterFavoritesProduct = products.slice(0, 10)

    return (
        <div className="home-container">
            <HeaderHome />
            <main className="main-container">
                <section className="f1-container">
                    <div className="box-txt">
                        <h1>{title}</h1>
                        <div className="see-more">
                            <p>Saiba Mais</p>
                            <button>{'>'}</button>
                        </div>
                    </div>
                    <div className="img-container"></div>
                </section>
                <section className="marcas-container">

                    <Swiper
                        slidesPerView={3}
                        navigation
                    >
                        <div className="marcas-content">
                            {marcasData.map((marca, index) => (
                                <SwiperSlide key={index}>
                                    <section>
                                        <img src={logo} />
                                    </section>
                                </SwiperSlide>
                            ))}
                        </div>

                    </Swiper>

                </section>
                <section className="list-favorites">

                    <h1>PRODUTOS RELACIONADOS</h1>

                    <Swiper
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        
                    >
                        <div className="products-container">
                            {filterFavoritesProduct.map((item, index) => (
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
        </div>
    );
};

export default HomePage;
