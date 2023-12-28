import './Logo.css'
import logo from './logo1.png'


const Logo = () => {
  return (
    <div className="contenedorLogo">
      <div className="imgLogo"><a href="imgLogo"><img src={logo} height={50} width={50}/></a></div>
      <div className="nameLogo"><a href="Tienda Cervecera">Tienda Cervecera</a></div>
    </div>
  )
}

export default Logo