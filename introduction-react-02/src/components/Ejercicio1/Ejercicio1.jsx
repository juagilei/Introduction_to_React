import { useState } from 'react'
import TituloEjercicio from '../TituloEjercicio'

function ChildComponent(props) {
  return (
    <div>
      <h2>Componente Hijo</h2>
      <p>Mensaje del Padre: {props.message}</p>
    </div>
  )
}

function ParentComponent() {
  const [message, setMessage] = useState('Message')

  const handleButtonClick = () => {
    setMessage('Message update from Parent')
  }

  return (
    <div>
      <h2>Componente Padre</h2>
      <p>Mensaje: {message}</p>
      <button onClick={handleButtonClick}>Update</button>
      <ChildComponent message={message} />
    </div>
  )
}

export default function Ejercicio1() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
      <ParentComponent />
    </section>
  )
}
