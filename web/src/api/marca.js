import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function ListarTodasMarcas(){
    const response = await api.get('/marcas') 

    return response.data
}
