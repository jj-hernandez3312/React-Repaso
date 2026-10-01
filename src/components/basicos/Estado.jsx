function Estado({ conectado, mensajes }) {
  // 1. if con return anticipado
  if (!conectado) return <p className="caja">Inicia sesión para continuar</p>

  return (
    <div className="caja">
      {/* 2. Ternario: una cosa u otra */}
      <p>{mensajes > 0 ? 'Tienes mensajes nuevos' : 'Bandeja vacía'}</p>

      {/* 3. &&: mostrar o no mostrar */}
      {mensajes > 0 && <span className="badge">{mensajes}</span>}
    </div>
  )
}

export default Estado
