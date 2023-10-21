import { createContext } from "react";
import { useState } from "react";

const ThemeContext = createContext(
)

export function ThemeProvider ({children}){
    // indico que se va a enviar a un hijo (children)
    const[theme,setTheme]=useState('ligth')
    return(
    // indico que lo que envio al hijo son las variables (Theme, setTheme)
        <ThemeContext.Provider value={{theme, setTheme}} > {children} </ThemeContext.Provider>
    )
}
export default ThemeContext