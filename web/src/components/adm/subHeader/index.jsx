import { useEffect, useState } from 'react'
import './index.scss'

const SubHeaderAdm = ({onClick}) => {

    const [scroll , setScroll] = useState(false)

    useEffect(()=>{

        const onScroll = () =>{
            window.scrollY > 50 ? setScroll(true) : setScroll(false)
        }

        window.addEventListener("scroll" , onScroll)

        return () => window.removeEventListener("scroll" , onScroll)

    },[])

    return(
        <header className={`subheader ${scroll ? 'subheader-scrolled' : 'subheader-container'}`}>
            <h1></h1>
            <button onClick={onClick}>Cadastrar</button>
        </header>
    )
}

export default SubHeaderAdm