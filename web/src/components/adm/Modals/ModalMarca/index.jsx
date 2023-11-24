import axios from 'axios'
import './index.scss'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const MarcaModal = (props) => {

    const [name, setName] = useState('')
    const [result, setResult] = useState('')

    async function CadastrarMarca() {

        try {

            let request = {
                nome: name
            }

            const response = await axios.post('http://129.148.42.252:5032/marcas/cadastrar', request)

            toast.dark('Marca cadastrada com sucesso')

        } catch (err) {
            toast.dark('A marca não pode ser cadastrada')
        }

    }


    return (
        <main className="modal-container">
            <section className='modal-box'>
                <div className='close-button'>
                    <button onClick={props.onClose}>x</button>
                </div>
                <div className='radius-image'>

                </div>
                <input
                    className='input'
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <button className='save-button' onClick={CadastrarMarca}>Cadastrar</button>
                <p>{result}</p>
            </section>
            <ToastContainer/>
        </main>
    )
}

export default MarcaModal