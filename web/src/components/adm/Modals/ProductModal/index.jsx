import { useState } from 'react'
import InputDefault from '../../../Inputs'
import './index.scss'
import { InserirProduto, SearchImg, SendImg } from '../../../../api/produto'
import axios from 'axios'
import ScrollView from '../../ScrollView'

const ProductModal = ({ onClose }) => {

  const [modelo, setModelo] = useState('')
  const [marca, setMarca] = useState('')
  const [descricao, setDescricao] = useState("")
  const [preco, setPreco] = useState()
  const [avaliacao, setAvaliacao] = useState()
  const [situacao, setSituacao] = useState(true)
  const [imagem, setImagem] = useState(null)


  const [selectVisible, setSelectVisible] = useState(false)

  const [result, setResult] = useState('')

  async function ApiCall() {
    try {

      const newProduct = await axios.post('http://129.148.42.252:5032/produtos/cadastrar', {
        marca: marca,
        modelo: modelo,
        descricao: descricao,
        valor: preco,
        avaliacao: avaliacao,
        situacao: situacao
      })

      console.log(newProduct.data.id)
      const enviarImg = await SendImg(newProduct.data.id , imagem   )

      setResult('Produto Cadastrado com sucesso')

    } catch (err) {
      setResult(err.message)
    }
  }


  function handleImgContent() {
    document.getElementById('img-radius').click()
  }

  const ShowTheImage = () => {
    if (typeof (imagem) === 'object') {
      return URL.createObjectURL(imagem)
    } else {
      return SearchImg(imagem)
    }
  }

  return (
    <main className="container-modal">
      <section className="modal-content">
        <div className='row-btn'>
          <button onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
              <path d="M18.741 15.8493L18.7397 15.8479L15.8947 13.0247L18.744 10.2057L18.7459 10.2038C19.1707 9.77908 19.1707 9.0914 18.7459 8.66665L16.8123 6.73306C16.3876 6.3083 15.6999 6.3083 15.2751 6.73305L15.2738 6.73441L12.4505 9.57936L9.6316 6.73007L9.62971 6.72817C9.20495 6.30342 8.51728 6.30342 8.09252 6.72817L6.15893 8.66177C5.73417 9.08652 5.73417 9.7742 6.15893 10.199L6.16028 10.2003L9.0055 13.0238L6.16055 15.8428L6.15893 15.8444C5.73417 16.2691 5.73417 16.9568 6.15893 17.3816L8.08719 19.3147L8.08764 19.3152C8.51239 19.7399 9.20007 19.7399 9.62483 19.3152L9.62617 19.3138L12.4497 16.4686L15.2686 19.3135L15.2703 19.3152C15.695 19.7399 16.3827 19.7399 16.8074 19.3152L18.7406 17.3869L18.741 17.3865C19.1658 16.9617 19.1658 16.274 18.741 15.8493ZM0.840607 13.0241C0.840607 6.6108 6.03667 1.41473 12.45 1.41473C18.8633 1.41473 24.0594 6.6108 24.0594 13.0241C24.0594 19.4374 18.8633 24.6335 12.45 24.6335C6.03667 24.6335 0.840607 19.4374 0.840607 13.0241Z" fill="black" stroke="black" />
            </svg>




          </button>
        </div>
        <div onClick={handleImgContent} className="radiusImg-content">
          {!imagem &&
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#606060" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-8 4v-5h2v3h12v-3h2v5H4Z" />
            </svg>
          }

          {imagem &&
            <img className='img-in' src={ShowTheImage()} />
          }
          <input type="file" id='img-radius' onChange={e => setImagem(e.target.files[0])}/>
        </div>
        <div className='input-row'>
          <InputDefault
            value={modelo}
            onChange={e => setModelo(e.target.value)}
            title='Modelo:'
          />
          <InputDefault
            title='Marca:'
            value={marca}
            inputType={true}
            onChange={e => setMarca(e.target.value)}
          />
          <InputDefault
            value={preco}
            onChange={e => setPreco(e.target.value)}
            inputType={true}
            title='Valor:'
          />
        </div>
        <div className="input-row">
          <label>
            Descrição:
            <textarea value={descricao} onChange={e => setDescricao(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
          </label>
          <InputDefault
            title='Avaliação'
            inputType={true}
            onChange={e => setAvaliacao(e.target.value)}
          />
          <ScrollView value={situacao} />
        </div>
        <p>{result}</p>
        <button className='save-button' onClick={ApiCall}>Enviar</button>
      </section>
    </main>
  )
}

export default ProductModal