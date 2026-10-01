import './Tarjeta.css'

function Tarjeta({ titulo, precio, disponible = true }) {
  return (
    <article className="tarjeta">
      <h3>{titulo}</h3>
      <p>${precio.toLocaleString('es-CL')}</p>
      {!disponible && <small className="alerta">Sin stock</small>}
    </article>
  )
}

export default Tarjeta
