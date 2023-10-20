import { Route, Routes } from 'react-router-dom'
import './index.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* Usar path="*" significa "coincidir con cualquier cosa", por lo que esta ruta
          actúa como una captura de todas las URL para las cuales no tenemos rutas
          explícitas definidas. */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
