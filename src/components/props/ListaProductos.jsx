import { formatearPesos } from '../../logica/formato'
import './ListaProductos.css'

const productos = [
  { id: 1, nombre: 'Notebook', precio: 549990, categoria: 'Computación' },
  { id: 2, nombre: 'Audífonos', precio: 34990, categoria: 'Audio' },
  { id: 3, nombre: 'Webcam', precio: 42990, categoria: 'Computación' },
]

// Recibe un objeto completo como prop y lo desestructura dentro.
function TarjetaProducto({ producto }) {
  const { nombre, precio, categoria } = producto
  return (
    <article className="producto">
      <small>{categoria}</small>
      <h3>{nombre}</h3>
      <p>{formatearPesos(precio)}</p>
    </article>
  )
}

function ListaProductos() {
  return (
    <div className="fila">
      {productos.map((p) => (
        <TarjetaProducto key={p.id} producto={p} />
      ))}
    </div>
  )
}

export default ListaProductos
