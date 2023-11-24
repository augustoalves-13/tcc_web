import './Footer.scss';
import { useState } from 'react';
import axios from 'axios';
import storage from 'local-storage'
import { Link, useNavigate } from 'react-router-dom';

export default function Rodape(){
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [buscar, setBuscar] = useState([]);
    const [erro, setErro] = useState('');

   
    async function Buscar(){
        let r = await axios.get('http://localhost:5032/home')
        setBuscar(r.data)
      }
      
    

       async function Salvar(){
        try{
          let pessoa ={
    
            ds_email: email,
            ds_mensagem:mensagem
          }
          let r = await axios.post('http://localhost:5032/home')
          setErro('pessoaadicionada')
        }
        catch(err){
        setErro(err.response.data.erro)
        }
        Buscar()
        Limpar()
       }
      
       async function Limpar(){
        
        setEmail('')
        setMensagem('')
      }


    return(
        <div className='rodape'>
            <div className='cabecalho'>
                <div>
                    <h1>COLEÇÕES</h1>
                    <p>CASUAL</p>
                    <p>ESPORTIVO</p>
                    <p>LUXO</p>
                </div>
                <div>
                    <h1>MARCAS</h1>
                    <p>ALFA ROMEO</p>
                    <p>AUDI</p>
                    <p>ASTON MARTIN</p>
                    <p>BUGATTI</p>
                    <p>CORVETTE</p>
                    <p>FERRARI</p>
                    <p>PORSHE</p>
                    <p>LAMBORGHINI</p>
                    <p>MC LAREN</p>
                </div>
                <div>
                    <h1>SOBRE A SCUDERIA</h1>
                    <a>NOSSA HISTORIA</a>
                    <p>OUTROS SERVIÇOS</p>
                    <a>DONOS</a>
                    
                </div>
                
                <div className='cont'>
                    <h1>ENTRE CONTATO</h1>
                    <input  type='text' placeholder='Seu Email'value={email} onChange={ e => setEmail(e.target.value)}/>
                    <input  type='text' placeholder='Mensagem' value={mensagem} onChange={ e => setMensagem(e.target.value)}/>
                    <button onClick={Salvar}>ENVIAR</button>
                </div>
            </div>

            <div className='ver'>
                <h1>VER MAIS</h1>
            </div>

        </div>
    )
}
