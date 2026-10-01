import { useState } from 'react'
import './EventosComunes.css'

function EventosComunes() {
  const [ultimo, setUltimo] = useState('ninguno todavía')
  const [encima, setEncima] = useState(false)

  // El objeto evento (e) trae información: qué tecla, qué elemento, qué valor
  const alPresionarTecla = (e) => {
    if (e.key === 'Enter') {
      setUltimo(`Enter con el texto "${e.target.value}"`)
    }
  }

  return (
    <div className="caja formulario">
      <p>
        Último evento: <strong>{ultimo}</strong>
      </p>

      <div
        className={encima ? 'zona zona-activa' : 'zona'}
        onMouseEnter={() => setEncima(true)}
        onMouseLeave={() => setEncima(false)}
        onDoubleClick={() => setUltimo('doble clic en la zona')}
      >
        {encima ? 'El mouse está encima' : 'Pasa el mouse o haz doble clic aquí'}
      </div>

      <input placeholder="Escribe y presiona Enter" onKeyDown={alPresionarTecla} />

      <input
        placeholder="Haz clic aquí y luego fuera"
        onFocus={() => setUltimo('foco en el campo')}
        onBlur={() => setUltimo('el campo perdió el foco')}
      />

      <input
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        onChange={(e) => setUltimo(`rango en ${e.target.value}`)}
      />
    </div>
  )
}

export default EventosComunes
