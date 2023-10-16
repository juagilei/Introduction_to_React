import ListaProductos from './ListaProductos'
import TituloEjercicio from '../TituloEjercicio'
import { productos } from '../../constants/productos'

export default function Ejercicio2() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 2</TituloEjercicio>
      <ListaProductos productos={productos} />
    </section>
  )
}
