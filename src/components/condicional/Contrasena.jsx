import { useState } from 'react'
import { nivelSeguridad } from '../../logica/seguridad'

function Contrasena() {
  const [clave, setClave] = useState('')
  const [mostrar, setMostrar] = useState(false)

  // La lógica vive en src/logica/seguridad.js, donde se puede probar aparte
  const seguridad = nivelSeguridad(clave)

  return (
    <div className="caja">
      <input
        type={mostrar ? 'text' : 'password'}
        placeholder="Contraseña"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
      />
      <button onClick={() => setMostrar(!mostrar)}>{mostrar ? 'Ocultar' : 'Mostrar'}</button>
      {clave.length > 0 && <p>Seguridad: {seguridad}</p>}
    </div>
  )
}

export default Contrasena
