import './index.scss'
import logoScuderia from '../../../assets/images/loginImages/escudo.png'
import { adminLogin } from '../../../api/admin'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Storage from 'local-storage'

const LoginAdm = () => {
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState("")

   const navigate = useNavigate()

   async function AdmLogin() {
      try {

         const resp = await adminLogin(email, senha)
         Storage("admin-logado" , resp)
         navigate('/admin/marcas')

      } catch (err) {
         if(err.response.status === 401){
            toast.dark(err.response.data.erro)
         }
      }
   }

   return (
      <div className="container-login">
         <div className="box-login adm">
            <div className="escudo">
               <img src={logoScuderia} />
               <h2>Login Adm</h2>
            </div>
            <div className="content-login">
               <div className="in-container">
                  <label>Email</label>
                  <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
               </div>
               <div className="in-container">
                  <label>Senha</label>
                  <input type="text" value={senha} onChange={e=> setSenha(e.target.value)}/>
               </div>
               <div className="btn-container">
                  <button onClick={AdmLogin}>Entrar</button>
                  <p onClick={()=>navigate('/')}>Deseja voltar ao login padrão de clientes? Clique aqui</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default LoginAdm