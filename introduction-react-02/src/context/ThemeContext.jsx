import { createContext } from "react";

const ThemeContext = createContext()

export function ThemeProvider ({children}){
    const[Theme,setTheme]=useState('ligth')
    return(
        <ThemeContext.Provider value={{Theme, setTheme}} > {children} </ThemeContext.Provider>
    )
}