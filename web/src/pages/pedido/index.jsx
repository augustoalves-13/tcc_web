import { useEffect, useState } from "react"
import { listar } from "../../api/enderecoAPI"
import Storage from 'local-storage'


const PedidoPage = ( ) => {
    const [endereco, setEndereco] = useState([])

    useEffect(()=>{
        async function ListarEndereço(){
            const idUser = Storage('user-logado').data.id
            const r = await listar(idUser)
            setEndereco(r)
        }

        ListarEndereço()
    },[])
    
    
    return(
        <div className="pedido-container">
            {endereco.map(item => 
                <div className="box">
                    <h5>{item.ref}</h5>
                    <p>{item.cep}</p>
                    <p>{item.cidade}</p>
                    <p></p>
                </div>    
            )}
        </div>
    )
}

export default PedidoPage