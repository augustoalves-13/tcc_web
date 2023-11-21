import { useNavigate } from 'react-router-dom'
import logo from '../../../../assets/images/scuderiaLogo.svg'
import './index.scss'

const HeaderHome = () => {

    const navigate = useNavigate()

    
    return(
        <header className='hdr-container'>
            <img src={logo} />
            <nav className="navbar">
                <div className="hyperlink-container">
                    <p>INÍCIO</p>
                    <div className="line"></div>
                </div>
                <div className="hyperlink-container">
                    <p>GALERIA</p>
                    <div className="line"></div>
                </div>
                <div onClick={navigate('/compre')} className="hyperlink-container">
                    <p>COMPRAR</p>
                    <div className="line"></div>
                </div>
                <button onClick={()=>navigate('/')}>
                    ENTRAR
                </button>
                <div className="hyperlink-container">
                    <p>CONTATO</p>
                    <div className="line"></div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderHome