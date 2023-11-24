import { useNavigate } from "react-router-dom"
import Storage from 'local-storage'
import { useEffect } from "react"

export default function CheckLogin(){
   
   const navigate = useNavigate()
   
   useEffect(()=>{
      if(!Storage("admin-logado")){
          navigate('/admin')
      }
  },[navigate])
}