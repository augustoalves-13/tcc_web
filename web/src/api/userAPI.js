import axios from "axios";

const api = axios.create({
   baseURL: 'http://129.148.42.252:5032'
})

export async function LoginUser(email, senha) {
   const r = await api.post('/user/login', {
      email: email,
      senha: senha
   })
   return r
}

export async function RegisterUser(nome, cpf, telefone, email, senha) {
   const r = await api.post('/user/cadastro', {
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      email: email,
      senha: senha,
   })
}