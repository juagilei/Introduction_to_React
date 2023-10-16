import ListaProductosCondicional from './ListaProductosCondicional'
import TituloEjercicio from '../TituloEjercicio'
import { productosCondicional } from '../../constants/productos'

export default function Ejercicio3() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 3</TituloEjercicio>
      <ListaProductosCondicional productos={productosCondicional} />
    </section>
  )
}
