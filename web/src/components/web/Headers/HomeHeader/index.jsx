import { useNavigate } from 'react-router-dom'
import logo from '../../../../assets/images/scuderiaLogo.svg'
import './index.scss'
import { useEffect } from 'react'
import Storage from 'local-storage'
import { useState } from 'react'

const HeaderHome = ({rota}) => {
    const [buttonVisible, setButtonVisible] = useState(true)
    const navigate = useNavigate()


    useEffect(() => {
        function Verificar() {
            let user = Storage('user-logado')

            if (!user) {
                setButtonVisible(true)
            } else {
                setButtonVisible(false)
            }
        }

        Verificar()
    }, [])

    return (
        <header className='hdr-container'>
            <img src={logo} />
            <nav className="navbar">
                <div onClick={()=>navigate('/home')} className="hyperlink-container">
                    <p>INÍCIO</p>
                    <div className="line"></div>
                </div>
                <div onClick={()=>navigate(`/galeria/${rota}`)} className="hyperlink-container">
                    <p>GALERIA</p>
                    <div className="line"></div>
                </div>
                <div onClick={() => navigate('/produtos')} className="hyperlink-container">
                    <p>COMPRAR</p>
                    <div className="line"></div>
                </div>
                {buttonVisible == true &&
                    <button onClick={() => navigate('/loginpage')}>
                        ENTRAR
                    </button>
                }
                <div onClick={()=>navigate('/carrinho')} className="hyperlink-container">
                    <p>CARRINHO</p>
                    <div className="line"></div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderHome
