import { useEffect, useState } from "react"
import './index.scss'
import { listAllProducts } from "../../../../api/produto"
import axios from "axios"

const ProductTable = () =>{

   const [products , setProducts] = useState([])

   const alternarCor = (indice) => {
      return indice % 2 === 0 ? 'cor-clara' : 'cor-escura'
  }

   async function handleGetProducts(){
      const resp = await axios.get('http://129.148.42.252:5032/produtos')

      console.log(resp.data)
      setProducts(resp.data)
   }


   useEffect(()=>{
      handleGetProducts()
   },[])
   
   
   return(
      <>
        <table className="tb-products">
            <div className='container-headTable'>
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>Valor</th>
                        <th>Avaliação</th>
                        <th>Disponível</th>
                    </tr>
                </thead>
            </div>
            <tbody>
                {products.map((item , index) => (
                    <tr key={index} className={alternarCor(index)}>
                        <td>{item.nome}</td>
                        <td>{item.valor}</td>
                        <td>{item.avaliacao}</td>
                        <td>{item.situacao}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </>
   )
}

export default ProductTable