import { useEffect, useState } from 'react'
import logo from '../../../assets/images/logo.svg'
import { ListarTodasMarcas } from '../../../api/marca'
import './index.scss'

const MarcasTable = (props) => {

    const [marcas, setMarcas] = useState([])

    const data = props.data

    const alternarCor = (indice) => {
        return indice % 2 === 0 ? 'cor-clara' : 'cor-escura'
    }

    async function LoadMarcas() {

        const resp = await ListarTodasMarcas()
        setMarcas(resp)
    }

    useEffect(() => {
        LoadMarcas()
    }, [])

    return (
        <table>
            <div className='container-headTable'>
                <thead>
                    <tr className='head-line'>
                        <th>Logo</th>
                        <th>ID</th>
                        <th>Marca</th>
                    </tr>
                </thead>
            </div>
            <tbody>
                {marcas.map((item , index) => (
                    <tr key={index} className={alternarCor(index)}>
                        <td className='td-first'>
                            <img className='img' src={logo} />
                        </td>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MarcasTable