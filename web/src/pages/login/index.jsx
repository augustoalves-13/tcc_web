import './index.scss'
import storage from 'local-storage'
import axios from 'axios'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { createRoutesFromChildren, useNavigate } from 'react-router-dom'
import InputDefault from '../../components/Inputs';
import { ToastContainer, toast } from 'react-toastify';
import bg from '../../assets/images/loginImages/bg.png'
import escudo from '../../assets/images/loginImages/escudo.png'
import { LoginUser, RegisterUser } from '../../api/userAPI';
import ModalRegister from '../../components/web/Modals/ModalCadastro';


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [result, setResult] = useState("")
    const [register, setRegister] = useState(false)
    const [adm, setAdm] = useState()
    const [visible, setVisible] = useState(false)


    const navigate = useNavigate()

    async function userLogin() {
        try {
            const response = await LoginUser(email, senha)
            storage("user-logado", response)
            navigate("/produtos")

        } catch (err) {
            if (err.response.status == 401) {
                toast.dark(err.response.data.erro)
            }
        }
    }


    async function Register() {
        try {

            const response = await RegisterUser()

        } catch (err) {

        }
    }

    const Adm = () => {
        if (!adm) {
            setAdm(true)
            console.log('a')
        } else if (adm == true) {
            setAdm("a")
            console.log('b')
        } else if (adm === "a") {
            navigate('/admin')
            console.log('c')
        }
    }

    return (
        <div className="login-container">
                <ModalRegister value={register} setValue={setRegister} />
            <div className={`box-login ${register ? 'login-hidden' : 'login-true'}`}>
                <div className='escudo'>
                    <img onClick={Adm} src={escudo} />
                    <h2>LOGIN</h2>
                </div>
                <div className="content-login">
                    <div className="in-container">
                        <label>Email:</label>
                        <input className='inputs' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="in-container">
                        <label>Senha:</label>
                        <input className='inputs' value={senha} onChange={e => setSenha(e.target.value)} />
                        <p>Esqueceu a senha?</p>
                    </div>
                    <div className="btn-container">
                        <button onClick={userLogin}>Entrar</button>
                        <p onClick={() => setRegister(true)}>Não possui uma conta? Cadastre se aqui</p>
                    </div>
                </div>
            </div>
            <img className='background-img' src={bg} />
        </div>
    )
}

export default LoginPage