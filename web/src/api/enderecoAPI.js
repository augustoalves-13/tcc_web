import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function salvar(idUser , cep , logradouro , bairro , cidade , estado , numero , complemento){
    const r = await api.post('/user/' +idUser+ '/endereco' , { cep , logradouro , bairro , cidade , estado , numero , complemento})
    return r.data
}

export async function listar(idUsuario){
    const r = await api.get('/user/' +idUsuario+ '/endereco')
    return r.data
}
