import PropTypes from 'prop-types'
export default function Lista(props) {

    if (props.productos.length === 0) {
    return (
        <div>
        <h3>Lista de Productos vacia</h3>
    </div>
    )}
    else { 
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
  }
  Lista.PropTypes ={
    productos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
      })
    ).isRequired
  }