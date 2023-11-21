import { useEffect, useState } from 'react'
import './index.scss'

const HeaderAdm = ({title}) => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {

        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)

    }, [])

    return (
        <header className={`header ${scrolled ? 'header-scrolled' : 'header-container'}`}>
            <h1>{title}</h1>
        </header>
    )
}

export default HeaderAdm    