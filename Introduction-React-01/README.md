# INTRODUCCIÓN A REACT

El repositorio se basa en practicas realizadas para la academia blockmaker en esta caso serán practicad de la  biblioteca REACT 
Las carpetas que se ven en el interior son las practicas que estan divididas en varias sesiones:
## Introduccion React 01:
### Ejercicio 1: Saludar.
Crea un componente llamado "Saludar" que reciba el prop "nombre" y muestre un mensaje de saludo utilizando ese nombre.

  #### Apuntes:
    1. Creo un componente Saludar en un archivo jsx (Saludar.jsx) de esta forma lo puedo llamar cuantas veces quiera.
       Tenemos que tener en cuenta que los componentes en React siempre empiezan por mayuscula en html es en minuscula,
       de esta forma lo diferenciamos uno de otro.
       
  ```jsx
        export default function Saludar(props) {
          return <h2 className="titulo-ejercicio">Hola {props.nombre}</h2>
        }
  ```
       Es importante validar el componente para terner avisos si el componente no funciona bien.
  ```jsx
      import PropTypes from 'prop-types'

export default function Saludar(props) {
    return ( 
        <div>
            <h2>Hola {props.name}</h2>
        </div>
    )
}
    Saludar.propTypes = {
        name: PropTypes.string.isRequired
    }
```
      Importo el componente PropTypes de la libreria prop-tyoes y al final defino las propiedades del prop, 
      en este name es un string y es un dato requerido.
      
    2. Una vez completado el componente Saludar creo otro archivo (Ejercicio1.jsx) donde voy llamando los componentes
      En este archivo importo los componentes que voy a necesitar 
   ### OJO¡¡¡ utilizo las llaves para escribir codigo Javascript en la el codigo html 
  ```jsx
      import TituloEjercicio from '../TituloEjercicio'
      import Saludar from './Saludar'
      export default function Ejercicio1() {
        return (
          <section className="caja-ejercicio">
            <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
            {/* Las llaves se usan para escribir codigo Javascript en la el codigo html */}
            <Saludar name='Juan'/>
          </section>
        )
      }
  ```
      Importo el componente TituloEjercicio el cual configura un texto para dar nombrar el ejercicio.
      Llamo TituloEjercicio y escxribo el texto
      Importo el componente Saludar
      Llamo Saludar y le envio el valor name = 'Juan'

    3. Una vez terminado el ejerccio1.jsx tengo que actuar sobre el archivo app.jsx que es el que enlaza los archivos a ejecutar con el html.
      App.jsx es llamado por el archivo html y ejecuta todas las funciones.
  ```jsx
      import Ejercicio1 from './components/Ejercicio1/Ejercicio1'
      import Footer from './components/Footer'
      import Header from './components/Header'
      import TituloPrincipal from './components/TituloPrincipal'
      import './index.css'
      
      export default function App() {
        return (
          <>
            <Header />
            <main>
              <TituloPrincipal />
              <Ejercicio1 />
            </main>
            <Footer />
          </>
        )
      }
  ```
      Footer, Header y Titulo principal y index.css son archivos que ya estan definidos para dar foma a la html.
      
      
     
          
          
        
### Ejercicio 2: Lista de Productos.
Dada una lista de productos ubicada en el archivo de constantes, crea un componente llamado "Lista" que reciba esta lista como prop y la renderice en la pantalla.
  #### Apuntes:
    1. Tenemos una constante definnida como array en la carpeta constants que se llama productos y es que vamos a usar para crear la lista.
      Creanos el archivo Lista.jsx para iterar el array y rederizarlo (imprimir o poner en pantalla) en una lista.
  ```jsx
      import PropTypes from 'prop-types'
      export default function Lista(props) {
          return (
            <div>
              <h3>Lista de Productos</h3>
              <ul>
                {props.productos.map((producto) => (
                  <li key={producto}>{producto}</li>
                ))}
              </ul>
            </div>
          )
        }
        Lista.propTypes = {
          productos: PropTypes.arrayOf(
            PropTypes.shape({
              text: PropTypes.string.isRequired,
            })
          ).isRequired
      }
```
      Para iterar el array prodductos lo itero la función predeterminada map en la que debo introducir una key que viene a ser un indicador
      del elemento a mostrar podria usar como key el index, que seria la posición del elemento en el array o si cada elemto tuviera un indicador 
      podria poner el indicador y luego pongo el elemnto a mostrar 
```jsx
 {props.productos.map((producto) => (
        <li key={producto}>{producto}</li>
```
      Para validar el componente con un array uso arrayOf para indicar el array y luego con shape los elementos que estan dentro del array.
```jsx
      Lista.propTypes = {
          productos: PropTypes.arrayOf(
            PropTypes.shape({
              text: PropTypes.string.isRequired,
            })
          ).isRequired
      }
```
    2. Edito el archivo ejercicio2.jsx en este caso al importar la constante productos vemos que en el archivo productos.js no esta definida por defecto,
      por lo que a la hora de importar debemos importar la constante entre llaves { productos }
```jsx
import TituloEjercicio from '../../soluciones/components/TituloEjercicio';
import {productos} from '../../constants/productos';
import Lista from './Lista';

export default function Ejercicio2() {
    return (
      <section className="caja-ejercicio">

        <TituloEjercicio>Este es el ejercicio 2</TituloEjercicio>
        <Lista productos={productos}/>
      </section>
    )
  }
```
      Llamo al componente Lista donde le indico que el archivo productos busco la constante productos
    
    3. La metodologia para el resto de archivos en la misma
    
    
  
### Ejercicio 3: Renderizado Condicional en la Lista.
Reutiliza el componente "Lista" que creaste en el ejercicio 2 y añade una funcionalidad de renderizado condicional. Si la longitud de la lista de productos es igual a cero, muestra el mensaje "No hay elementos en la lista".
  ### Apuntes:
    1. Los procedimientos de este ejercicio son practicamente los mismos, lo único que hay que hace es crear un condicional.
      Primero vamos a crear el componente condicional Lista.jsx el cual será un condicional if tal y como lo conocemos.
  ```jsx
import PropTypes from 'prop-types'
export default function Lista(props) {

    if (props.productos.length === 0) {
    return (
        <div>
        <h3>Lista de Productos vacia</h3>
    </div>
    )}
    else { 
        return (
            <div>
            <h3>Lista de Productos</h3>
            <ul>
              {props.productos.map((producto) => (
                <li key={producto}>{producto}</li>
              ))}
            </ul>
          </div>
           
            )
    }
  }
  Lista.PropTypes ={
    productos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
      })
    ).isRequired
  }
```
      En este caso lo que hacemos es vez el tamaño del array props.productos.length cuando es 0 ponemos qe la lista esta vacia y si no rederiza la lista.

    2. Vamos a realiza el mismo ejercicio con un elemento ternario utilizando otra constante productosCondicional y otro componente llamado ListaTernario.jsx
```jsx
 {props.productos.length === 0 ? (
          <ul>
            <li>La lista esta vacia</li>
        </ul>
        ) : (
          <ul>
            {props.productos.map((producto, index) => (
              <li key={index}>{producto}</li>
            ))}
          </ul>
        )}
```
    3. Defino el archivo ejecicio3.jsx donde llamamos a los dos componentes.
```jsx
import TituloEjercicio from '../TituloEjercicio';
import {productos} from '../../constants/productos';
import { productosCondicional } from '../../constants/productos';
import Lista from './Lista';
import ListaTernario from './ListaTernario';


export default function Ejercicio3() {
    return (
      <section className="caja-ejercicio">

        <TituloEjercicio>Este es el ejercicio 3</TituloEjercicio>
        <Lista productos={productos}/>
        <Lista productos={productosCondicional}/>
        <TituloEjercicio>Ejercicio 3 con condicional ternario</TituloEjercicio>
        <ListaTernario productos={productos}/>
        <ListaTernario productos={productosCondicional}/>
      </section>
    )
  }
```

    
### Ejercicio 4: Contador.
Crea un contador simple que aumente su valor cada vez que se presiona un botón. Este ejercicio te ayudará a comprender cómo gestionar el estado en React.
  #### Apuntes:
    1. Creamos un componente llamado Contador en este caso usaremos un hook conocido como useState el cual se usa para inicializar y cambiar estados.
```jsx
import { useState } from 'react'
```
    2. Definimos la función, teniendo encuenta que definimos unas constantes count (cuenta) y setcount(incremente el contador), luego introducimos
    la función de incrementar en la constanet incrementar donde el setcount incrementa el count de uno en uno
```jsx
export default function Contador() {
  const [count, setCount] = useState(0)

  const incrementar = () => {
    setCount(count + 1)
  }
```
    3. Finalmente defino un boton el cuan incremnte el contador cada vez que lo cliqueo.
```jsx
 <button onClick={incrementar}>Incrementar contador</button>
```
El resto de archivos se configuran de la misma forma que en los ejercicios anteriores

