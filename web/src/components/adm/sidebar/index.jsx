import { useState } from 'react'
import './index.scss'
import carrinho from '../../../assets/images/sidebar/carrinho.svg'
import marcas from '../../../assets/images/sidebar/marcas.svg'
import pedido from '../../../assets/images/sidebar/pedido.svg'
import user from '../../../assets/images/sidebar/carrinho.svg'
import escudo from '../../../assets/images/loginImages/escudo.png'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {

    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()

    function handleSideBarVisible() {
        if (visible === false) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const sideBarContent = [
        { title: 'Marcas', img: marcas, nav: '/admin/marcas' },
        { title: 'Produtos', img: carrinho, nav: '/admin/produtos' },
        { title: 'Pedidos', img: pedido, nav: '/admin/' },
        { title: 'Clientes', img: carrinho, nav: '/admin/' },
    ]

    const BtnSide = ({ title, sourceImg, onClick }) => {
        return (
            <div onClick={onClick}>
                <img src={sourceImg} />
                {visible === true &&
                    <p>{title}</p>
                }
            </div>
        )
    }

    return (
        <aside className={visible ? 'side-bar' : 'closed'}>
            <div className='sidebar-top'>

                {visible === true && 
                    <img className='img-logo' src={escudo}/>
                }

                <button className='btn-openSidebar' onClick={handleSideBarVisible}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 14" fill="none">
                        <path d="M8 14C7.72386 14 7.5 13.7761 7.5 13.5V0.5C7.5 0.223858 7.72386 0 8 0C8.27614 0 8.5 0.223858 8.5 0.5V13.5C8.5 13.7761 8.27614 14 8 14Z" fill="#fff" />
                        <path d="M0.146447 7.35355C-0.0488155 7.15829 -0.0488155 6.84171 0.146447 6.64645L2.14645 4.64645C2.34171 4.45118 2.65829 4.45118 2.85355 4.64645C3.04882 4.84171 3.04882 5.15829 2.85355 5.35355L1.70711 6.5L5.5 6.5C5.77614 6.5 6 6.72386 6 7C6 7.27614 5.77614 7.5 5.5 7.5L1.70711 7.5L2.85355 8.64645C3.04882 8.84171 3.04882 9.15829 2.85355 9.35355C2.65829 9.54882 2.34171 9.54882 2.14645 9.35355L0.146447 7.35355ZM10 7C10 6.72386 10.2239 6.5 10.5 6.5H14.2929L13.1464 5.35355C12.9512 5.15829 12.9512 4.84171 13.1464 4.64645C13.3417 4.45118 13.6583 4.45118 13.8536 4.64645L15.8536 6.64645C16.0488 6.84171 16.0488 7.15829 15.8536 7.35355L13.8536 9.35355C13.6583 9.54881 13.3417 9.54881 13.1464 9.35355C12.9512 9.15829 12.9512 8.84171 13.1464 8.64645L14.2929 7.5H10.5C10.2239 7.5 10 7.27614 10 7Z" fill="#fff" />
                    </svg>
                </button>
            </div>

            <nav className='navigation-menu'>
                {sideBarContent.map((item, index) => (
                    <BtnSide key={index}
                        title={item.title}
                        sourceImg={item.img}
                        onClick={() => navigate(item.nav)}
                    />
                ))}
            </nav>

        </aside>
    )
}

export default SideBar