import PropTypes from 'prop-types'


export default function Lista(props) {
    return (
      <div>
        <h3>Lista de Productos</h3>
        <ul>
          {props.productos.map((producto) => (
            <li key={producto}>{producto}</li>
          ))}
        </ul>
      </div>
    )
  }
  Lista.propTypes = {
    productos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
      })
    ).isRequired
}