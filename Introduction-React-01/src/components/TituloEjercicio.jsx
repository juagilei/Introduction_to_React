// Libreria nativa para validar tipos de datos de las props de un componente
import PropTypes from 'prop-types'

export default function TituloEjercicio(props) {
  return <h2 className="titulo-ejercicio">{props.children}</h2>
}

TituloEjercicio.propTypes = {
  // Validamos que el componente TituloEjercicio reciba un string como children (hijo)
  children: PropTypes.string.isRequired
}
