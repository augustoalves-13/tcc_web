import { useEffect, useState } from 'react'
import HeaderAdm from '../../../components/adm/header'
import SideBar from '../../../components/adm/sidebar'
import SubHeaderAdm from '../../../components/adm/subHeader'
import './index.scss'
import ProductModal from '../../../components/adm/Modals/ProductModal'
import ProductTable from '../../../components/adm/Tables/ProductTables'

const ProductPage = () => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <div className='main-container'>
            <SideBar />
            <main className='main-content'>
                <HeaderAdm
                    title='Controle de Produtos'
                />
                <SubHeaderAdm 
                    onClick={()=>{
                        setModalVisible(true)
                    }}
                />
                <ProductTable/>
            </main>
            {modalVisible === true &&
                <ProductModal 
                    onClose={()=>{
                        setModalVisible(false)
                    }}
                />
            }
        </div>
    )
}

export default ProductPage