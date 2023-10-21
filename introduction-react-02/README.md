# Ejercicios Introducción a React: Estado, Eventos, formularios, enrutamiento y llamadas a API

En esta clase, continuaremos explorando React y nos centraremos en el manejo del estado y eventos en los componentes de React. Además, aprenderemos sobre la comunicación entre componentes, el uso de formularios, el enrutamiento y cómo realizar llamadas a API en una aplicación de React.

Para empezar, hemos proporcionado un ejemplo inicial del **Ejercicio 1** como punto de partida.

Este proyecto ha sido configurado utilizando Vite, un entorno de desarrollo rápido para aplicaciones web con React.

- Documentación Vite: https://vitejs.dev/guide/

## Cómo empezar

Siga estos pasos para ejecutar el proyecto:

1. Una vez hecho el fork del repositorio original, clona el repositorio a tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/introduccion-react-02.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd introduccion-react-02
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Ejecuta la aplicación:

   ```bash
   npm run dev
   ```

5. Abre tu navegador y visita http://localhost:3000 para ver la aplicación en funcionamiento.

- Cada ejercicio se encuentra en una carpeta separada con su número correspondiente. Deberás crear un nuevo componente llamado "EjercicioX" (donde X es el número del ejercicio) y desarrollar la solución dentro de esa carpeta. Luego, importa y utiliza el componente en tu archivo principal de la aplicación.

### Ejercicio 1: Comunicación entre componentes

#### Objetivo:

- Practicar la comunicación entre componentes mediante la propagación de props.

#### Instrucciones:

1. Crea un componente llamado `ParentComponent`.
2. Dentro de `ParentComponent`, crea una variable de estado llamada `message` con un valor inicial.
3. Crea un componente hijo llamado `ChildComponent`.
4. Propaga la variable `message` como una prop al componente `ChildComponent`.
5. En el componente `ChildComponent`, muestra el valor de `message` en la pantalla.
6. Implementa un botón en `ParentComponent` que permita cambiar el valor de `message` y observe cómo se actualiza en `ChildComponent`.

### Ejercicio 2: Uso de formularios en React

#### Objetivo:

- Aprender cómo manejar formularios en React.
- Utilizar los eventos `onChange` y `onSubmit` en un formulario.

#### Instrucciones:

1. Crea un formulario con los siguientes campos: Nombre, Email y Mensaje.
2. Crea un componente llamado `Formulario` que contenga el formulario.
3. Implementa funciones para manejar los eventos `onChange` de los campos del formulario y actualiza el estado correspondiente para cada campo.
4. Implementa una función para manejar el evento `onSubmit` del formulario y muestra los valores ingresados en la consola.

### Ejercicio 3: Enrutamiento (Routing) en React

#### Objetivo:

- Aprender a implementar enrutamiento en una aplicación de React.
- Utilizar la biblioteca React Router para gestionar las rutas de la aplicación.

#### Instrucciones:

1. Instala React Router en tu proyecto si aún no lo has hecho: [React Router](https://reactrouter.com/).
2. Configura las siguientes rutas en tu aplicación:
   - Ruta de inicio ("/"): Mostrará un mensaje de bienvenida.
   - Ruta de Acerca de ("/about"): Mostrará información sobre la empresa o el proyecto.
   - Ruta de Contacto ("/contact"): Mostrará un formulario de contacto.
   - Ruta página no encontrada ("\*"): Se mostrará siempre que se ponga en el navegador una ruta no definida en nuestra applicación.
3. Crea componentes separados para cada una de las rutas.
4. Utiliza React Router para definir y renderizar las rutas en tu aplicación.
5. Agrega enlaces de navegación en la barra de navegación para cada ruta.
6. Implementa el enrutamiento para que cuando el usuario haga clic en un enlace, la vista correspondiente se muestre en la pantalla.

Ejemplo:

1. Primero deberiamos instalar la libreria react-router-dom de la siguiente manera, pero para este proyecto ya la encontrareis instalada y podeis saltaros este paso:

   ```bash
   npm install react-router-dom
   ```

2. Tenemos distintas opciones de routers para realizar el enrutamiento, pero nosotros utilizaremos el "BrowserRouter". Primero debemos hacer wrap (envolver) de la app con el enrutador.

- Fichero main.jsx

  ```jsx
  import React from 'react'
  import ReactDOM from 'react-dom/client'
  //Importamos BrowserRouter de react-router-dom
  import { BrowserRouter } from 'react-router-dom'
  import App from './App.jsx'
  import '../index.css'

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* Añadimos el BrowserRouter que envuelve la aplicación para poder añadir las rutas de la app */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
  ```

3. Creamos una carpeta "pages" dentro de src y añadimos los siguientes componentes paginas (Home, About, Contact y NotFound):

- Home.jsx (Añadimos el contenido que teniamos en App.jsx)

  ```jsx
  import Ejercicio1 from '../components/Ejercicio1'
  import Ejercicio2 from '../components/Ejercicio2'
  import Ejercicio3 from '../components/Ejercicio3'
  import Ejercicio4 from '../components/Ejercicio4'
  import Footer from '../components/Footer'
  import Header from '../components/Header'
  import TituloPrincipal from '../components/TituloPrincipal'

  export default function Home() {
    return (
      <>
        <Header />
        <main>
          <TituloPrincipal />
          <Ejercicio1 />
          <Ejercicio2 />
          <Ejercicio3 />
          <Ejercicio4 />
        </main>
        <Footer />
      </>
    )
  }
  ```

- About.jsx

  ```jsx
  export default function About() {
    return (
      <div>
        <h1>Página sobre nosotros</h1>
      </div>
    )
  }
  ```

- Contact.jsx

  ```jsx
  export default function Contact() {
    return (
      <div>
        <h1>Página de Formulario de contacto</h1>
      </div>
    )
  }
  ```

- NotFound.jsx (Añadimos el componente "Link" de react-router-dom para volver a la pagina de inicio)

  ```jsx
  import { Link } from 'react-router-dom'

  export default function NotFound() {
    return (
      <div>
        <h1>Error 404 - Página no encontrada</h1>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }
  ```

4. Definimos las rutas de nuestra app en el componente App.

- Fichero App.jsx

  ```jsx
  // Importamos Routes y Route de react-router-dom
  import { Route, Routes } from 'react-router-dom'
  import '../index.css'
  import About from './pages/About'
  import Contact from './pages/Contact'
  import Home from './pages/Home'
  import NotFound from './pages/NotFound'

  export default function App() {
    return (
      // Definimos las Rutas con el componente Padre Routes
      <Routes>
        <!-- Definimos cada ruta de nuestra app con el componente Route. En este caso decimos que es el index y no hace -->
        falta poner ninguna ruta.
        <Route index element={<Home />} />
        <!-- Definimos la ruta que corresponde en "path" y en element ponemos el componente pagina que tiene que ser renderizado.-->
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <!-- Usar path="*" significa "coincidir con cualquier cosa", por lo que esta ruta
          actúa como una captura de todas las URL para las cuales no tenemos rutas
          explícitas definidas. -->
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  }
  ```

5. Creamos nuestro componente Navegacion y añadimos los Links con las rutas de nuestra applicación.

- Fichero Navegacion.jsx

  ```jsx
  import { Link } from 'react-router-dom'

  export default function Navegacion() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Sobre nosotros</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    )
  }
  ```

6. Añadimos nuestro componente Navegacion al Ejercicio3 y tambien en las otras paginas (Excepto NotFound).

- Ejemplo en pagina About (Fichero About.jsx):

  ```jsx
  import Navegacion from '../components/Ejercicio3/Navegacion'

  export default function About() {
    return (
      <div>
        <h1>Página sobre nosotros</h1>
        <Navegacion />
      </div>
    )
  }
  ```

### Ejercicio 4: Llamadas a API en React

#### Objetivo:

- Aprender a realizar llamadas a una API externa en una aplicación de React.
- Utilizar la función `fetch` para obtener datos de una API.
- Renderizar los personajes de la api de Rick & Morty y mostrar su imagen y nombre.

#### Instrucciones:

1. Crea un componente llamado `Personajes`.
2. Utiliza el hook `useEffect` para realizar una llamada a la API de rick and morty https://rickandmortyapi.com/api/character cuando el componente se monta.
3. Maneja el estado `cargando (loading)` cuando se inicia y termina la petición a la API con el hook `useState`.
4. Almacena los datos de recibidos en una variable usando el hook `useState`.
5. Muestra los datos obtenidos de la API en la pantalla usando el metodo `map` de manera legible (por ejemplo, en una lista) y muestra minimo la `imagen` y el `nombre del personaje`.
6. Maneja posibles errores en la llamada a la API y muestra un mensaje adecuado en caso de error.

¡Diviértete trabajando en estos ejercicios y sigue explorando React! Si tienes alguna pregunta o necesitas ayuda, no dudes en consultar la documentación de React o buscar recursos en línea. ¡Happy coding!

Recursos adicionales:

- [Documentación de React](https://es.react.dev/learn)
- [Gestión del estado en React](https://es.react.dev/learn/managing-state)
- [React Router](https://reactrouter.com/en/main/start/tutorial)
- [Fetch API en JavaScript](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

## Resolución de ejercicios y anotaciones:

### Ejercicio extra: useContext
   Mediante useContext daremos un contexto a toda la pagina para que se pueda ver de día o de noche.

   1. Creamos una carpeta que contenga los achivos context, pueden haber varios context conde englobar cosas, por lo que normalmente se suelen poner en        una carpeta que los contenga a todos.
   2. Creamos un archivo para el componente ThemeContext donde:
```jsx
   import { createContext } from "react";

   const ThemeContext = createContext()

   export function ThemeProvider ({children}){
    // indico que se va a enviar a un hijo (children)
    const[Theme,setTheme]=useState('ligth')
    return(
    // indico que lo que envio al hijo son las variables (Theme, setTheme)
        <ThemeContext.Provider value={{Theme, setTheme}} > {children} </ThemeContext.Provider>
          )
      }
   export default ThemeContext
```
           
   3. Como el contexto va englobado en toda la web es interesante ponerlo en el main (main.jsx), ya que así afecta a toda la web.
      Todos los componentes que estan dentro de App van a tener acceso al contexto y para poder tener acceso a este contexto tengo que exportarlo
      por defecto por ejemplo ( export default ThemeContext ).
```jsx
      // Documento main.jsx
      
      import React from 'react'
      import ReactDOM from 'react-dom/client'
      import App from './App.jsx'
      import { ThemeProvider } from './context/ThemeContext.jsx'
      
      ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
      // envuelvo a <App /> en el contexto ThemeProvider
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </React.StrictMode>
      )
```
   4. Me interesa tener el cambio de de fondo día/noche en el header para poder usarlo en cualquier pagina que tenga.
```jsx
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'
import { useState } from 'react'

// para usar el useContext en el header importo el useContext, useState (para cambiar le estado)
// defino las variables del componente ThemeContext y para darles un estado que será inicialmente el del componente (ThemeContext)
// realmente ThemeContext tine dos variables y las desestructuro.
// introducimos un boton en el return (por que si no, no lo devueve a la web) que cambie de estado el Theme para noche o día.
// siempre es recomendable que la función que haga el boton este en una variable aparte, por lo que definimos (handleThemeChange)
// al botón le indico que si el estado de theme es light me ponga el dibujo de la luna para pasr a night 
// o de lo contrario me ponga un sol para pasar a día


export default function Header() {
  const[Theme, setTheme]=useState(ThemeContext)
  const handleThemeChange = () => {
    setTheme(Theme === 'light' ? 'dark':'light')
  }

  return (
    <header>
      <img src="/blockmaker-logo.png" alt="blockmaker-logo" width={300} />
      <button onClick={handleThemeChange}>Cambio de fondo{Theme === 'light'? '🌙':'☀️'}</button>
    </header>
  )
}
```
   5. finalmente modifico el home para que cambie el background
```jsx
import Footer from '../components/Footer'
import Header from '../components/Header'
import TituloPrincipal from '../components/TituloPrincipal'
import '../index.css'
import Ejercicio1 from '../components/Ejercicio1/Ejercicio1'
import Ejercicio2 from '../components/Ejercicio2/Ejercicio2'
import Ejercicio3 from '../components/Ejercicio3/Ejercicio3'
import Ejercicio4 from '../components/Ejercicio4/Ejercicio4'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
export default function Home() {

  const[theme, setTheme] = useContext(ThemeContext)

  return (
    <>
      <Header />
      <main style={{backgroundColor: theme == 'light' ? 'white':'darkgray'}}>
        <TituloPrincipal />
        <Ejercicio1 />
        <Ejercicio2 />
        <Ejercicio3 />
        <Ejercicio4 />



      </main>
      <Footer />
    </>
  )
}
```

### Ejercicio 01: Comunicación entre componentes
   #### Resolución
   ##### Consejo: Tener en cuenta que una función siempre dee de devolver algo, por lo que siempre hay que poner return () 
   ##### en lo que queremos devolver y por lo tanto tambien si queremos rederizar (ver en pantalla)
```jsx
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
```
### Ejercicio 2: Crecación de formularios.
#### Resolución
```jsx
import { useState } from "react"

// creo un componente controlado llamado Formulario
// es un componente controlado por que esta controlado por el estado (useState) de react


export default function Formulario () {
// defino las variables como variables de estado.
const[form, setForm] = useState({
    name: '',
    email: '',
    message: ''
})
// definimos la función que actua en el cambio de datos (setForm)
const handleInputChange=(event)=>{
    // defino las variable que va a recibir setForm 
    // en este caso como es un array con tres elementos [name, email, message
    // defino el nombre del elemento y su valor e indico que es un evento tarjet,
    // o sea target por que hay varios elementos y se indicara cual es can cada momento por eso target

    const{name, value}=event.target
    // actualizo el form importando todo el array (...form) y 
    // dando valor al elemento que indico ([name]: value)
    setForm({...form,[name]:value})
}
// implementamos la función de submit donde se maneja el envio de datos
const handleSubmit=(event)=>{
    // Prevenimos el comportamiento de submit
    // Cuando el evento no sea correcto, submit no envia el formulario para eso usamos (event.preventDefault())
    event.preventDefault()
    // Podemos añadir alertas de concola para ver que funciona bien.
    alert('Datos del formulario:', form)
    console.log('Datos del formulario:', form)

}

//  Pasamos al render, lo que queremos que devuelva la función  ver por pantalla
   return(
//  Defino el formulario como tipo onsubmit
// Dentro defino los inputs poniendo un label a cada uno y definendo cada input.
// Los inouts los defino con type= 'text', 
// name el nombre de cada elemento del array form ('name', 'email', 'message')
// y finalmente la parte onChange que es el cambio donde llama a la función handleInputChange
// finalmente declaro un boton submit para hacer el envio
    <div>
        <h2>Forlmulario a rellenar</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" name="name" value={form.name} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" value={form.email} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Mensaje:</label>
                <input type="text" name="message" value={form.message} onChange={handleInputChange}/>
            </div>
            <button type='submit' name='boton'>Enviar</button>
        </form>
    </div>
    
   )
}
```
#### Solo faltaía llamar al Ejercicio 2 desde el archivo App.jsx y a formulario desde el archvo Ejercicio 2

### Ejercicio 3: Enrutamiento (Routing) en React
#### Resolución:
Vamos a crear 4 paginas en las que podemos acceder desde la pagina principal, cramos las pagina y el enrutamiento:

1. Para esto tenemos que importar el BrowserRouter en el fichero main.jsx y englobamos a App con   <BrowserRouter>
   ```jsx
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   //Importamos BrowserRouter de react-router-dom
   import { BrowserRouter } from 'react-router-dom'
   import App from './App.jsx'
   import '../index.css'
   
   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </React.StrictMode>
   )
   ```
2. Creamos las paginas para el enrutamiento en una nueva carpeta llamada pages donde ponemos las siguientes paginas (Home, About, Contact y NotFound):
   La pagina home es la que utilizaremos como principal, por lo que todo lo que hemos puesto hasta el momento en App.jsx lo pasamos a home y App.jsx lo vamos a usar como enrutador de las     paginas.
   
3. Vamos rellenando las paginas:
   #### Home.jsx:
   ```jsx
   import Ejercicio1 from './components/Ejercicio1/Ejercicio1'
   import Footer from './components/Footer'
   import Header from './components/Header'
   import TituloPrincipal from './components/TituloPrincipal'
   import './index.css'
   import Ejercicio2 from './components/Ejercicio2/Ejercicio2'
   
   export default function App() {
     return (
       <>
         <Header />
         <main>
           <TituloPrincipal />
           <Ejercicio1 />
           <Ejercicio2 />

      </main>
      <Footer />
    </>
     )
   }
   ```
   #### Abauto.jsx:
   ```jsx
      export default function About() {
     return (
       <div>
         <h1>Página sobre nosotros</h1>
       </div>
     )
   }
   ```
   #### Contact.jsx:
 ```jsx
      export default function Contact() {
        return (
          <div>
            <h1>Página de Formulario de contacto</h1>
          </div>
        )
      }
```
   ### NotFound.jsx:
   Sería la opción a pagina no encontrada, por lo que le añadimos un link que nos develva a la pagina de inico home.
   ```jsx
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1>Error 404 - Página no encontrada</h1>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}
```
### App.jsx:
Añadimos todas las rutas delas paginas

```jsx

      // Importamos Routes y Route de react-router-dom
      import { Route, Routes } from 'react-router-dom'
      import '../index.css'
      import About from './pages/About'
      import Contact from './pages/Contact'
      import Home from './pages/Home'
      import NotFound from './pages/NotFound'
      export default function App() {
        return (
          // Definimos las Rutas con el componente Padre Routes
          <Routes>
            <!-- Definimos cada ruta de nuestra app con el componente Route. En este caso decimos que es el index y no hace -->
            falta poner ninguna ruta.
            <Route index element={<Home />} />
            <!-- Definimos la ruta que corresponde en "path" y en element ponemos el componente pagina que tiene que ser renderizado.-->
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <!-- Usar path="*" significa "coincidir con cualquier cosa", por lo que esta ruta
              actúa como una captura de todas las URL para las cuales no tenemos rutas
              explícitas definidas. -->
            <Route path="*" element={<NotFound />} />
          </Routes>
        )
      }
```

4. Creamos un componente navegación que se muestre en el ejercicio 3 y en todas las paginas excepto en la de NotFound
```jsx
import { Link } from 'react-router-dom'

export default function Navegacion() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Sobre nosotros</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}
```
   por ejemplo en la pagina About ponemos:
```jsx
import Navegacion from '../components/Ejercicio3/Navegacion'

export default function About() {
  return (
    <div>
      <h1>Página sobre nosotros</h1>
      <Navegacion />
    </div>
  )
}
```
### Ejercicio 4: Llamadas a API en React
   - Aprender a realizar llamadas a una API externa en una aplicación de React.
   - Utilizar la función fetch para obtener datos de una API.
   - Renderizar los personajes de la api de Rick & Morty y mostrar su imagen y nombre.

#### Resolución:
```jsx
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
```





      
