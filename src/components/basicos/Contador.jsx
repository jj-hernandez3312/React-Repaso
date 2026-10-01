import { useState } from 'react'

function Contador() {
  const [cuenta, setCuenta] = useState(0)

  return (
    <div className="caja">
      <p>Has hecho clic {cuenta} veces</p>
      <button onClick={() => setCuenta((c) => c + 1)}>Sumar</button>
      <button onClick={() => setCuenta(0)}>Reiniciar</button>
    </div>
  )
}

export default Contador
