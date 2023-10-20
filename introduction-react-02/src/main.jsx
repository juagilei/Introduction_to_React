// Documento main.jsx

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
