import axios from 'axios'
import { API_URL } from './config'

const api = axios.create({
   baseURL: API_URL
})

export async function salvarNovoPedido(idUsuario, novoPedido){
   const r = await api.post('/pedido/' + idUsuario, novoPedido)
}