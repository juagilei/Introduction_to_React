import TituloEjercicio from '../TituloEjercicio';

// en la carpeta constants la constante productos no es definida para exportarla por defecto
// por lo que hay que importarla ente las llaves { productos } para que sea identificada.
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





