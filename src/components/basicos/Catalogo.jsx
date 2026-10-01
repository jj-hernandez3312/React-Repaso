const productos = [
  { id: 1, nombre: 'Teclado', precio: 25990 },
  { id: 2, nombre: 'Mouse', precio: 12990 },
  { id: 3, nombre: 'Monitor', precio: 149990 },
]

function Catalogo() {
  return (
    <ul className="caja">
      {productos.map((p) => (
        <li key={p.id}>
          {p.nombre}: ${p.precio.toLocaleString('es-CL')}
        </li>
      ))}
    </ul>
  )
}

export default Catalogo
