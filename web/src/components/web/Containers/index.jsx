import ProductsHeader from '../Headers/ProductsPageHeader'
import './index.scss'

const ContainerProduct = ({ title }, props) => {
    return (
        <div className="container-main">
            <ProductsHeader
                title={title}
            />
            <main className="main-content">
                {props.children}
            </main>
        </div>
    )
}

export default ContainerProduct