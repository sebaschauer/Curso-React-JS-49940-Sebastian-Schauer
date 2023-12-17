
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
    <div><NavBar/></div>
    <div><ItemListContainer greetings={"Bienvenidos a la tienda cervecera de Seba!!"}/></div>
    </>
  )
}

export default App
