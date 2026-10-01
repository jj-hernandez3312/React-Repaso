import { useState } from 'react'
import { mensajePara, estaAprobado } from '../../logica/notas'

function Calificacion() {
  const [nota, setNota] = useState(5.5)
  const aprobado = estaAprobado(nota)

  return (
    <div className="caja formulario">
      <label htmlFor="nota">Nota: {nota.toFixed(1)}</label>
      {/* Los inputs entregan texto: Number() lo convierte a número */}
      <input
        id="nota"
        type="range"
        min="1"
        max="7"
        step="0.1"
        value={nota}
        onChange={(e) => setNota(Number(e.target.value))}
      />
      <p className={aprobado ? 'ok' : 'alerta'}>{mensajePara(nota)}</p>
    </div>
  )
}

export default Calificacion
