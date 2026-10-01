import { useState } from 'react'

const MAXIMO = 80

function ContadorCaracteres() {
  const [texto, setTexto] = useState('')

  // Valor derivado: se calcula a partir del estado, no necesita su propio useState
  const restantes = MAXIMO - texto.length

  return (
    <div className="caja formulario">
      <textarea
        rows={3}
        maxLength={MAXIMO}
        placeholder="Escribe un mensaje"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <p className={restantes < 10 ? 'alerta' : ''}>Quedan {restantes} caracteres</p>
      <p>Vista previa en mayúsculas: {texto.toUpperCase()}</p>
    </div>
  )
}

export default ContadorCaracteres
