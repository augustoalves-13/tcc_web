import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})


export async function listAllProducts(){
    const response = await api.get('/produtos')
    return response.data
}

export async function RegisterProduct(marca , modelo , descricao , preco , avaliacao , situacao){
    const response = await api.post('http://localhost:5000/produtos/cadastrar', {
        marca: marca,
        modelo: modelo,
        descricao: descricao,
        valor: preco,
        avaliacao: avaliacao,
        situacao: situacao
      })

      return response.data
}

export async function ListProductsFromId(id){
    const r = await api.get('/produtos/'+id)

    return r.data
}

export async function ListProductName(){
    const r = await api.get('/produtos')
}

export async function SendImg(id , imagem){
    
    const formData = new FormData()
    formData.append('capa' , imagem)

    const response = await axios.put(`http://localhost:5000/produtos/${id}/poster` , formData , {
        headers:{
            "Content-Type":"multipart/form-data"
        }
    })

    return response.data

}

export function SearchImg(image){
    return `${api.getUri()}/${image}`
}

export async function searchFromId(id){
    const resp = await api.get("/produtos/" + id)

    return resp.data
}

