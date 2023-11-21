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


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [result, setResult] = useState("")
    const [register, setRegister] = useState(false)

    const navigate = useNavigate()

    async function userLogin() {
        try {

            const r = await axios.post("http://localhost:5000/user/login", {
                email: email,
                senha: senha,
            })

            storage("user-logado", r)

            navigate("/compre")

        } catch (err) {
            if (err.response.status == 401) {
                toast.dark(err.response.data.erro)
            }
        }
    }



    function handleBox() {
        if (register == false) {
            setRegister(true)
        } else {
            setRegister(false)
        }
    }

    return (
        <div className="login-container">
            <div className={`box-login ${register ? 'login-hidden' : 'login-true'}`}>
                <div className='escudo'>
                    <img src={escudo} />
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
            <div className={`box-register ${register ? 'register-true' : 'register-false'}`}>
                <div className='escudo'>
                    <img src={escudo} />
                    <h2>CADASTRE-SE</h2>
                    <div className="content-login">
                        <div className="in-container">
                            <label>Nome Completo:</label>
                            <input className='inputs' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="in-container">
                            <label>E-mail:</label>
                            <input className='inputs' value={senha} onChange={e => setSenha(e.target.value)} />
                        </div>
                        <div className="in-container">
                            <label>Senha:</label>
                            <input className='inputs' value={senha} onChange={e => setSenha(e.target.value)} />
                        </div>
                        <div className="btn-container">
                            <button onClick={userLogin}>Cadastre-se</button>
                            <p onClick={() => setRegister(false
                                )}>Já possui uma conta, cadastre-se?</p>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default LoginPage