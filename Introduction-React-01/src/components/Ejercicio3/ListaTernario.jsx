import PropTypes from 'prop-types'

export default function ListaTernario(props) {
    return (
      <div>
        <h3>Lista de Productos</h3>
        {props.productos.length === 0 ? (
          <ul>
            <li>La lista esta vacia</li>
        </ul>
        ) : (
          <ul>
            {props.productos.map((producto, index) => (
              <li key={index}>{producto}</li>
            ))}
          </ul>
        )}
      </div>
    )
  }
  ListaTernario.PropTypes ={
    productos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
      })
    ).isRequired
  }