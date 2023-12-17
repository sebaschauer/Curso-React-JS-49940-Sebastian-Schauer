import { IoCartOutline } from "react-icons/io5";
import './CartWidget.css'


const CartWidget = () => {
  return (
    <div className="contenedorCart">
        <a href=""><IoCartOutline className="iconoCarrito"/><span className="cantCarrito"> (1)</span></a>    
    </div>
  )
}

export default CartWidget