import { useEffect } from 'react'
import './index.scss'
import Storage from 'local-storage'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PerfilModal = () => {
   const [usuario, setUsuario] = useState([])

   const navigate = useNavigate()

   function UserVerique() {
      const user = Storage('user-logado')

      console.log(user.data)
      setUsuario(user.data)
   }
   useEffect(() => {

      UserVerique()

   })

   function sair(){
      const user = Storage('user-logado', null)
      
      navigate('/')
   }

   return (
      <div className="modalcontainer">
         <div className="radius">

         </div>
         <div className="div">
            <label>Nome:</label>
            <div>
               {usuario.cliente}
            </div>
         </div>
         <div className="div">
            <label>E-mail:</label>
            <div>
               {usuario.email}
            </div>
         </div>
         <button onClick={sair}>Sair</button>
      </div>
   )
}

export default PerfilModal