import { useState, useEffect } from 'react'

export default function Personajes() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h3>Personajes de Rick and Morty API</h3>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {data.results.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name + '-img'} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
