import { useState } from 'react'

function FormTarea({ onAgregar }) {
  const [texto, setTexto] = useState('')

  const enviar = (e) => {
    e.preventDefault()
    if (texto.trim() === '') return
    onAgregar(texto.trim())
    setTexto('')
  }

  return (
    <form className="fila" onSubmit={enviar}>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Nueva tarea" />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default FormTarea
