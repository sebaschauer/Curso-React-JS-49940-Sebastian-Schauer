import './ItemListContainer.css'

const ItemListContainer = ({greetings}) => {
  return (
    <div className="contenedorGral">
        <div className="contSaludo">
            <h1>{greetings}</h1>
        </div>
    </div>
  )
}

export default ItemListContainer