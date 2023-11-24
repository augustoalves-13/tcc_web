import axios from "axios";
import { API_URL } from "./config";

const api = axios.create({
   baseURL: API_URL
})

export async function adminLogin(email , senha){
   const response = await api.post('/adm/login', {
      email:email,
      senha:senha
   })

   return response
}