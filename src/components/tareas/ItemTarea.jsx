function ItemTarea({ tarea, onAlternar, onEliminar }) {
  return (
    <li className="item">
      <input type="checkbox" checked={tarea.hecha} onChange={() => onAlternar(tarea.id)} />
      <span style={{ textDecoration: tarea.hecha ? 'line-through' : 'none' }}>{tarea.texto}</span>
      <button onClick={() => onEliminar(tarea.id)}>Eliminar</button>
    </li>
  )
}

export default ItemTarea
