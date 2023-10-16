import TituloEjercicio from '../../soluciones/components/TituloEjercicio';

// en la carpeta constants la constante productos no es definida para exportarla por defecto
// por lo que hay que importarla ente las llaves { productos } para que sea identificada.

import {productos} from '../../constants/productos';
import Lista from './Lista';

export default function Ejercicio2() {
    return (
      <section className="caja-ejercicio">

        <TituloEjercicio>Este es el ejercicio 2</TituloEjercicio>
        <Lista productos={productos}/>
      </section>
    )
  }
  

