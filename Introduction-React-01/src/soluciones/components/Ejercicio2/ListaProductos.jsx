export default function ListaProductos(props) {
  return (
    <div>
      <h3>Lista de Productos</h3>
      <ul>
        {props.productos.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
    </div>
  )
}
