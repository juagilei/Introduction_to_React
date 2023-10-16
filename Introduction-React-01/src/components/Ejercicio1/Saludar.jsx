import PropTypes from 'prop-types'

export default function Saludar(props) {
    return ( 
        <div>
            <h2>Hola {props.name}</h2>
        </div>
    )
}
    Saludar.propTypes = {
        name: PropTypes.string.isRequired
    }
    
