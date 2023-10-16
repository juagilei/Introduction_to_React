import Saludar from './Saludar'
import TituloEjercicio from '../TituloEjercicio'

export default function Ejercicio1() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
      <Saludar nombre="Juan" />
    </section>
  )
}
