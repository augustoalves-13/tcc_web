import axios from "axios";
const api = axios.create({
    baseURL: 'http://129.148.42.252:5032'
})


export async function ListarTodasMarcas(){
    const response = await api.get('/marcas') 

    return response.data
}
