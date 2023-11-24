import { useState } from 'react'
import './index.scss'
import escudo from '../../../../assets/images/loginImages/escudo.png'
import { toast } from 'react-toastify'
import { RegisterUser } from '../../../../api/userAPI'

const ModalRegister = ({ value, setValue }) => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [cellphone, setCellphone] = useState("")
   const [cpf, setCpf] = useState("")

   async function UserRegister(){
      try {

         const resp = await RegisterUser(name, cpf, cellphone, email, senha)

         toast.dark("Usuário Cadastrado com sucesso, Volte a tela de login")
         
      } catch (err) {
         if (err.response.status == 401) {
            toast.dark(err.response.data.erro)
        }  
      }
   }

   return (
      <div className={`box-register ${value ? 'register-true' : 'register-false'}`}>
         <div className='escudo'>
            <img src={escudo} />
            <h2>CADASTRE-SE</h2>
         </div>
         <div className="content-login">
            <div className="in-container">
               <label>Nome Completo:</label>
               <input className='inputs' value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="content-inputs">
               <div>
                  <label>Cpf:</label>
                  <input className='inputs' value={cpf} onChange={e => setCpf(e.target.value)} />
               </div>
               
               <div>
                  <label>Telefone:</label>
                  <input className='inputs' value={cellphone} onChange={e => setCellphone(e.target.value)} />
               </div>
            </div>
            <div className="in-container">
               <label>E-mail:</label>
               <input className='inputs' value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="in-container">
               <label>Senha:</label>
               <input className='inputs' value={senha} onChange={e => setSenha(e.target.value)} />
            </div>
            <div className="btn-container">
               <button onClick={UserRegister}>Cadastre-se</button>
               <p onClick={() => setValue(false)}>Já possui uma conta, cadastre-se?</p>
            </div>
         </div>
      </div>
   )
}

export default ModalRegister