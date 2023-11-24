import { useEffect, useState } from "react"
import { listar } from "../../api/enderecoAPI"
import Storage, { set } from 'local-storage'
import ProductsHeader from "../../components/web/Headers/ProductsPageHeader"
import './index.scss'
import { searchFromId } from "../../api/produto"
import { API_URL } from "../../api/config"
import InputDefault from "../../components/Inputs"
import { salvarNovoPedido } from "../../api/pedidoAPI"
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from "react-router-dom"
import CardEndereco from "../../components/web/CardEndereco"
import ModalEndereco from "../../components/web/Modals/ModalEndereco"
import HeaderHome from "../../components/web/Headers/HomeHeader"


const PedidoPage = () => {
    const [endereco, setEndereco] = useState([])
    const [itens, setItens] = useState([])

    const [modalVisible, setModalVisible] = useState(false)
    const [visibleModal, setVisibleModal] = useState(false)

    const [frete, setFrete] = useState('')
    const [cupom, setCupom] = useState('')
    const [idEndereco, setIdEndereco] = useState()

    const [nome, setNome] = useState('')
    const [cvv, setCvv] = useState('')
    const [validade, setValidade] = useState('')
    const [numero, setNumero] = useState('')
    const [tipo, setTipo] = useState()
    const [parcela, setParcela] = useState()

    const navigate = useNavigate()

    async function ListProducts() {
        const carrinho = Storage('carrinho')

        if (carrinho) {
            let temp = []

            for (let produto of carrinho) {
                let p = await searchFromId(produto.id)

                temp.push({
                    produto: p,
                    qtd: produto.qtd
                })
            }

            setItens(temp)
        }

    }

    async function ListarEndereço() {
        const idUser = Storage('user-logado').data.id
        const r = await listar(idUser)
        setEndereco(r)
    }

    useEffect(() => {
        ListProducts()
        ListarEndereço()
    }, [])

    function showImg(img) {
        return API_URL + '/' + img
    }

    function CalcTotal() {
        let total = 0

        for (let item of itens) {
            total = total + item.qtd * item.produto.vl_valor
        }
        return total
    }

    function onOpen() {
        setModalVisible(true)
    }

    async function savePedido() {
        try {

            let produtos = Storage('carrinho');
            let id = Storage('user-logado').data.id

            console.log(id)

            let pedido = {

                cupom: cupom,
                frete: frete,
                idEndereco: idEndereco,
                tipoPagamento: 'Cartão',
                cartao: {
                    nome: nome,
                    numero: numero,
                    vencimento: validade,
                    codSeguranca: cvv,
                    formaPagamento: tipo,
                    parcelas: parcela
                },
                produtos: produtos

            }

            const r = await salvarNovoPedido(id, pedido);
            toast.dark("Pedido foi Inserido com sucesso")
            Storage('carrinho', [])
            navigate('/')
            setModalVisible(false)

        } catch (err) {
            toast.dark(err.response.data.erro)
        }
    }

    function openModal() {
        setVisibleModal(true)
    }

    function onClose() {
        setVisibleModal(false)
    }

    return (
        <div className="pedido-container">
            <HeaderHome/>
            <div className="content-order">
                <div className="endereco-content">
                    <div style={{display: 'flex', gap: 20}} className="container-endereco">
                        {endereco.map(item =>
                            <CardEndereco item={item} selecionar={setIdEndereco} selecionado={item.id == idEndereco} />
                        )}
                    </div>
                    <button onClick={openModal}>Novo Endereço</button>
                </div>
                <div className="order-info">
                    <div>
                        <h1>Total</h1>
                        <span>R$ {CalcTotal()}</span>
                    </div>
                    <button onClick={onOpen}>Pagar</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th id="first-child">Item</th>
                        <th>Quantidade</th>
                        <th>Preço Unitário</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {itens.map(item => (
                        <tr className="body-line">
                            <td id="first-child">
                                <div className="img-container">
                                    <img src={showImg(item.produto.img_banner)} />
                                    <div>
                                        <h3>{item.produto.nm_modelo.slice(0, 16)}</h3>
                                    </div>
                                </div>
                            </td>
                            <td>{item.qtd}</td>
                            <td>R$ {item.produto.vl_valor}</td>
                            <td>{item.qtd * item.produto.vl_valor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <footer>

            </footer>
            {modalVisible &&
                <div className="paymentModal-container">
                    <div className="box-modal">
                        <h1>Cartão da compra</h1>
                        <>
                            <InputDefault title='Nome do Titular' value={nome} onChange={e => setNome(e.target.value)} />
                            <div className="input-content">
                                <div className="in-content">
                                    <label>CVV</label>
                                    <input type="text" value={cvv} onChange={e => setCvv(e.target.value)} />
                                </div>
                                <div className="in-content">
                                    <label>Validade</label>
                                    <input type="text" value={validade} onChange={e => setValidade(e.target.value)} />
                                </div>
                            </div>
                            <InputDefault title='Número do Cartão' />
                            <div className="input-content">
                                <select value={tipo} onChange={e => setTipo(e.target.value)}>
                                    <option>Débito</option>
                                    <option>Crédito</option>
                                </select>
                                <select value={parcela} onChange={e => setParcela(e.target.value)}>
                                    <option value={1}>01x A vista</option>
                                    <option value={2}>02x sem juros</option>
                                    <option value={3}>03x sem juros</option>
                                    <option value={4}>04x  sem juros</option>
                                    <option value={5}>05x  sem juros</option>
                                    <option value={6}>06x  sem juros</option>
                                </select>
                            </div>
                            <button onClick={savePedido}>
                                Fechar Pedido
                            </button>
                        </>
                    </div>
                </div>
            }

            {visibleModal == true &&
                <ModalEndereco onClose={onClose} />
            }
        </div>
    )
}

export default PedidoPage