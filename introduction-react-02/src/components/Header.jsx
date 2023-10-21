
import { useContext } from 'react'
import { useState } from 'react'
import ThemeContext from '../context/ThemeContext'

// para usar el useContext en el header importo el useContext, useState (para cambiar le estado)
// defino las variables del componente ThemeContext y para darles un estado que será inicialmente el del componente (ThemeContext)
// realmente ThemeContext tine dos variables y las desestructuro.
// introducimos un boton en el return (por que si no, no lo devueve a la web) que cambie de estado el Theme para noche o día.
// siempre es recomendable que la función que haga el boton este en una variable aparte, por lo que definimos (handleThemeChange)
// al botón le indico que si el estado de theme es light me ponga el dibujo de la luna para pasr a night 
// o de lo contrario me ponga un sol para pasar a día


export default function Header() {
  const[theme, setTheme]=useState(ThemeContext)
  
  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark':'light')
  }
  return (
    <header>
      <img src="/blockmaker-logo.png" alt="blockmaker-logo" width={300} />
      <button onClick={handleThemeChange}>Cambio de fondo{theme === 'light'? '🌙':'☀️'}</button>
    </header>
  )
}
