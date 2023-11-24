import { useState } from 'react'
import './index.scss'
import { salvar } from '../../../../api/enderecoAPI'
import { toast } from 'react-toastify'
import InputDefault from '../../../Inputs'
import Storage from 'local-storage'

const ModalEndereco = ({ exibir, onClose }) => {

   const [ref, setRef] = useState('')
   const [logradouro, setLogradouro] = useState('')
   const [cep, setCep] = useState('')
   const [numero, setNumero] = useState('')
   const [complemento, setComplemento] = useState('')
   const [bairro, setBairro] = useState('')
   const [cidade, setCidade] = useState('')
   const [estado, setEstado] = useState('')

   async function SalvarEndereco() {
      try {

         const id = Storage('user-logado').data.id

         console.log(id)

         const r = await salvar(id, ref, cep, logradouro, bairro, cidade, estado, numero, complemento)

         toast.dark("Endereço salvo")
      } catch (err) {
         toast.dark(err)
      }
   }

   return (
      <div className="container-modal-endereco">
         <div className="box-modal">
            <div className="modal-btn">
               <button onClick={onClose}>x</button>
            </div>
            <InputDefault title='Referência' value={ref} onChange={e => setRef(e.target.value)} />
            <InputDefault title='Cep' value={cep} onChange={e => setCep(e.target.value)} />
            <InputDefault title='Logradouro' value={logradouro} onChange={e => setLogradouro(e.target.value)} />
            <InputDefault title='Nûmero' value={numero} onChange={e => setNumero(e.target.value)} />
            <InputDefault title='Complemento' value={complemento} onChange={e => setComplemento(e.target.value)} />
            <InputDefault title='Bairro' value={bairro} onChange={e => setBairro(e.target.value)} />
            <InputDefault title='Cidade' value={cidade} onChange={e => setCidade(e.target.value)} />
            <InputDefault title='Estado' value={estado} onChange={e => setEstado(e.target.value)} />
            <button onClick={SalvarEndereco}>Salvar</button>
         </div>
      </div>
   )
}

export default ModalEndereco