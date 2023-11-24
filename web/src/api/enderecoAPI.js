import axios from "axios";
import { API_URL } from "./config";

const api = axios.create({
    baseURL: API_URL
})

export async function salvar(idUser , cep , logradouro , bairro , cidade , estado , numero , complemento){
    const r = await api.post('/user/' +idUser+ '/endereco' , { cep , logradouro , bairro , cidade , estado , numero , complemento})
    return r.data
}

export async function listar(idUsuario){
    const r = await api.get('/user/' +idUsuario+ '/endereco')
    return r.data
}
