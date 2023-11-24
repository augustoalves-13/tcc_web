import './index.scss'

const CardEndereco = ({ item: { id, ref, logradouro, cep, bairro, cidade, estado, numero, complemento }, selecionar, selecionado }) => {

   console.log(selecionar)

   function select() {
      selecionar(id)
   }

   return (
      <div
         className={`box ${selecionado ? 'select' : 'wait'}`}
         onClick={select}
      >
         <h2>{ref}</h2>
         <section>
            <p>{logradouro}</p>
            <div>
               <p>{cep}</p>
               <p>/</p>
               <p>{bairro} , </p>
               <p>{cidade}</p>
               <p>{estado}</p>
            </div>
         </section>
      </div>
   )
}

export default CardEndereco