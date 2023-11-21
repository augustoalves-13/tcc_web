import { useEffect, useState } from 'react'
import './index.scss'

const InputDefault = ({title , value , onChange , inputType}) => {

   const [type , setType ] = useState(false)
   
   useEffect(()=>{
      setType(inputType)
   },[])

   return (
      <label className='input-container'>
         {title}
         <input type={type ? 'number' : 'text'} value={value} onChange={onChange}/>
      </label>
   )
}

export default InputDefault