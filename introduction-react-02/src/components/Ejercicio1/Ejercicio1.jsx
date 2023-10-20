   // Tengo que importar useState para declarar variables de estado.
// También importo la función declarada en otro archivo TituloEjercicio que usaré 
// para nombrar los ejercicios.
import { useState } from 'react'
import TituloEjercicio from '../TituloEjercicio'


function ChildComponent(props) {
  // defino ChildComponent y le indico que va a recibir una prop.
  // en return indico lo que va devolver la función.
  // pongo lo que quiero renderizar (ver por pantalla) en un contenedor div.
  // indico la variable a recibir por parte del padre ParentComponent.
    return(
    <div>
      <h2>Componente Hjo</h2>
      <p>Mensaje: {props.message}</p>
    </div>
    )
    
  }
// Creo la función ParentComponent la cual tendrá una variable de estado llamada message.
// Esta variable se enviará como prop a otro componente llamado ChildComponent.
// Child component mostrará el valor de message.
// Mediante el un botón el valor de message cambiará de estado.
function ParentComponent() {
// defino la variable message y como va a variar de estado debo de usar el useState
// para usar useState debo declarar dos variables, una noemal y otra con el prefijo set.
// la primera guarda el valor inicial y luego lo que va racibiendo de set.
// la que tiene el prefijo set es la que realiza la acción del cambio de estado.
  const [message, setMessage] = useState('Message')
// Tambien nos solicta que cambiemos el estado mediante un boton, porlo que es recomendable.
// Usar otra función que realice el setMesage (cambiode message).

  const handleButtonClick = () => {
    setMessage('Message update')
  }
  return (
  // la función ParentComponent devolverá por pantalla un texto donde se vea el estado de message,
  // además implemento un boton para realizar el cambio de estado llamando a la función handleButtonClick.
  // Indico a la función ChildComponent la propiedad que le envio.
  <div>
    <h2>Componente Padre </h2>
    <p>Mensaje: {message}</p>
    <button onClick={handleButtonClick}> Actualizar</button>
    <ChildComponent message={message} />
  </div>
  )

}
// La función ejercicio1 es a la que llamaré para ejecutar las funciones de este ejercicio.
// Por lo tanto desde esta función llamare a ParentComponent.
export default function Ejercicio1() {
// LLamo a la función ParentComponent
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
      <ParentComponent />
    </section>
  )
}