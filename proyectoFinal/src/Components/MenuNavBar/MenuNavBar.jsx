import './MenuNavBar.css'

const MenuNavBar = () => {
  return (
    <div className="contGralMenu">
        <ul className="MenuNavBar">
            <li className="ItemMenu"><a href="Inicio">Inicio</a> </li>
            <li className="ItemMenu"><a href="Cervezas">Cervezas</a> </li>
            <li className="ItemMenu"><a href="Merchandising">Merchandising</a> </li>
        </ul>
    </div>
  )
}

export default MenuNavBar