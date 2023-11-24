import HeaderHome from "../../components/web/Headers/HomeHeader"
import './index.scss'

const ThanksPage = () => {
   return(
      <div className="thanks-container">
         <HeaderHome/>
         <section>
            <h1>Obrigado pela confiança!</h1>
            <h3>Em breve vamos enviar, alguns status do seu pedido</h3>
         </section>
      </div>
   )
}

export default ThanksPage