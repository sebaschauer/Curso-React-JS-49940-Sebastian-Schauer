import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"
import MenuNavBar from "../MenuNavBar/MenuNavBar"
import './NavBar.css'



const NavBar = () => {
  return (
    <div className="containerNavBar">
        <div className="contenedorLogo"><Logo/></div>
        <div className="contenedorMenu"><MenuNavBar/></div>
        <div className="contenedorCarrito"><CartWidget/></div>
    </div>
  )
}

export default NavBar