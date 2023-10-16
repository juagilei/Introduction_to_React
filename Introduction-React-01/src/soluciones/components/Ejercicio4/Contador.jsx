import { useState } from 'react'

export default function Contador() {
  const [contador, setContador] = useState(0)

  const incrementarContador = () => {
    setContador(contador + 1)
  }

  const decrementarContador = () => {
    setContador(contador - 1)
  }

  return (
    <div>
      <h3>Contador</h3>
      <p>Valor del contador: {contador}</p>
      <button onClick={decrementarContador}>Decrementar</button>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  )
}
