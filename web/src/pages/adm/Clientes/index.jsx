import HeaderAdm from '../../../components/adm/header'
import SideBar from '../../../components/adm/sidebar'
import SubHeaderAdm from '../../../components/adm/subHeader'
import './index.scss'

const ClientesPage = () => {
    return(
        <div className="main-container">
            <SideBar/>
           <main className="main-content">
                <HeaderAdm title='Clientes'/>
                <SubHeaderAdm/>
                
            </main> 
        </div>
    )
}