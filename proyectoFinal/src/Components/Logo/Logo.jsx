import './Logo.css'



const Logo = ({logo1}) => {
  return (
    <div className="contenedorLogo">
      <div className="imgLogo"><a href="imgLogo">{logo1}</a></div>
      <div className="nameLogo"><a href="Tienda Cervecera">Tienda Cervecera</a></div>
    </div>
  )
}

export default Logo