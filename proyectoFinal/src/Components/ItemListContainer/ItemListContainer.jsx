import './ItemListContainer.css'
import Counter from '../Counter/Counter'
import ItemDetail from '../ItemDetail/ItemDetail'



// eslint-disable-next-line react/prop-types
const ItemListContainer = ({greetings}) => {
  return (
    <div className="contenedorGral">
        <div className="contSaludo">
            <h1>{greetings}</h1>
        </div>
        <div>
          <Counter/>
        </div>
        <div className='contenedorItemDetail'>
          <ItemDetail/>
          <ItemDetail/>
          <ItemDetail/>
          <ItemDetail/>
        </div>
    </div>
  )
}

export default ItemListContainer