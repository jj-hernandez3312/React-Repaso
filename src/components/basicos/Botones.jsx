function Botones() {
  const saludar = () => alert('Hola')
  const saludarA = (nombre) => alert(`Hola, ${nombre}`)

  return (
    <div className="caja">
      <button onClick={saludar}>Pasar la función</button>
      <button onClick={() => saludarA('Ana')}>Función con argumento</button>
      {/* Incorrecto: onClick={saludar()} ejecutaría alert al renderizar */}
    </div>
  )
}

export default Botones
