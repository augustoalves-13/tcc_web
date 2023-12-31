import './index.scss'
import SideBar from "../../../components/adm/sidebar"
import HeaderAdm from '../../../components/adm/header'
import SubHeaderAdm from '../../../components/adm/subHeader'
import { useEffect, useState } from 'react'
import { ListarTodasMarcas } from '../../../api/marca'
import MarcasTable from '../../../components/adm/MarcasTable'
import MarcaModal from '../../../components/adm/Modals/ModalMarca'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import CheckLogin from '../../../components/adm/Verificacao'


const ControleMarcas = () => {

    const [search, setSearch] = useState('')
    const [modalVisible, setModaVisible] = useState(false)
    const navigate = useNavigate()

    const onOpen = () => {
        setModaVisible(true)
    }

    const onClose = () => {
        setModaVisible(false)
    }

    CheckLogin()

    return (
        <div className="main-container">
            <SideBar />
            <main className="main-content">
                <HeaderAdm
                    title='Controle de Marcas'
                />
                <SubHeaderAdm
                    onClick={() => onOpen()}
                />
                <section className='table-section'>
                    <div className='search-container'>
                        <div className='inputContent'>
                            <input type="text" />
                            <button className='search-btn'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" fill="none">
                                    <path d="M15.7824 13.833L12.6666 10.7177C12.5259 10.5771 12.3353 10.499 12.1353 10.499H11.6259C12.4884 9.39596 13.001 8.00859 13.001 6.49937C13.001 2.90909 10.0914 0 6.50048 0C2.90959 0 0 2.90909 0 6.49937C0 10.0896 2.90959 12.9987 6.50048 12.9987C8.00996 12.9987 9.39756 12.4863 10.5008 11.6239V12.1332C10.5008 12.3332 10.5789 12.5238 10.7195 12.6644L13.8354 15.7797C14.1292 16.0734 14.6042 16.0734 14.8948 15.7797L15.7793 14.8954C16.0731 14.6017 16.0731 14.1267 15.7824 13.833ZM6.50048 10.499C4.29094 10.499 2.50018 8.71165 2.50018 6.49937C2.50018 4.29021 4.28781 2.49976 6.50048 2.49976C8.71001 2.49976 10.5008 4.28708 10.5008 6.49937C10.5008 8.70852 8.71314 10.499 6.50048 10.499Z" fill="#fff" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <MarcasTable />
                </section>
            </main>
            {modalVisible === true &&
                <MarcaModal
                    onClose={onClose}
                />
            }
        </div>
    )
}

export default ControleMarcas