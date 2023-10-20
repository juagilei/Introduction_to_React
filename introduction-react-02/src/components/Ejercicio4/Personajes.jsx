import { useState, useEffect } from "react";


export default function Personajes() {
   const [loading, setLoading]=useState(true)
   const [data,setData]=useState([])

   useEffect(()=>{
// uso fetch para entrar en la API y ver el contenido
    fetch('https://rickandmortyapi.com/api/character ')
// convuerto los datos que me da la Api en formato json
    .then ((response)=>response.json())
// actualizo los datos y cambio tambien de estado loading 
// para que deje de verse cargando por que ya tengo los datos.
    .then((data)=>{
        setData(data)
        setLoading(false)
// veo en consola los datos del array
        console.log({data})
    })
    .catch((error) => {
// cambio tambien de estado loading 
// para que deje de verse cargando por que ya tengo los datos.
        setLoading(false)
    })
// Con el array vacio indico que solo use el useEffect cuando se monte
// De lo contrario si no pongo nada estaía siempre llamando a la API.
   },[])
// miro si se han cargado los datos con el componente ternario
// dentro de una lista <ul> mapeo el array cada item tiene un id
// recorro el array mirando en cada id el item image y el item name
// los voy poniendo en la lista <li>
   return(
    <div><h3>Los personajes son: </h3>
    {loading ? (
        <p>Pagina cargando</p>
    ):(
        <ul>
           {data.results.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name + '-img'} />
              <p>{item.name}</p>
            </li>
            ))}
        </ul>
    )
    }
    </div>
   )
   
}