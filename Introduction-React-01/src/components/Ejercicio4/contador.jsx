import { useState } from 'react'

export default function Contador() {
  const [count, setCount] = useState(0)

  const incrementar = () => {
    setCount(count + 1)
  }


    return (
        <div>
            <h4>El contador esta a: {count}</h4>
            <button onClick={incrementar}>Incrementar contador</button>
        </div>
    )
    
}