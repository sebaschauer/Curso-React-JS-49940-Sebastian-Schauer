import {  useState } from 'react'
import './Counter.css'


const Counter = () => {
  const [contador, setContador] = useState(0);

  const agregar = () =>{
    setContador( contador +1)
  }

  const eliminar = () =>{
    setContador( contador -1)
  }



  return (
    <div className='contenedorGralCont'>
      <div className='contenedorContador'>
        <button className='botonAgregar' onClick={agregar}>Agregar</button>
        <span className='contador'>{contador}</span>
        <button className='botonEliminar' onClick={eliminar}>Eliminar</button>
      </div>
    </div>
  )
}

export default Counter