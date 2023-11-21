import { useState } from "react";
import './index.scss'

const ScrollView = ({value}) => {

   const [selectVisible, setSelectVisible] = useState(false)
   const [txt , setTxt] = useState('Não')

   const handleBoolYes = () => {
      setTxt('Sim')
   }

   const handleBoolNo = () => {
      setTxt('Não')
   }


   return (
      <label>
         Disponvel:
         <div className='scrollview-container'>

            <div
               className="options-select"
               onClick={() => {
                  if (selectVisible === true)
                     setSelectVisible(false);
                  else
                     setSelectVisible(true)
               }}
            >
               <p>{txt}</p>
               {selectVisible === true &&
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 8l6 6H6l6-6Z" /></svg>
               }
               {selectVisible === false &&
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><path fill="currentColor" d="m12 8l6 6H6l6-6Z" /></g></svg>
               }
            </div>
            {selectVisible === true &&
               <div className='scrollview'>
                  <button onClick={handleBoolYes}>Sim</button>
                  <button onClick={handleBoolNo}>Não</button>
               </div>
            }
         </div>
      </label>
   )
}


export default ScrollView