import { useState } from 'react'

function Interruptor() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="caja">
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Ocultar' : 'Mostrar'} detalle
      </button>
      {visible && <p>Este texto aparece y desaparece según el estado.</p>}
    </div>
  )
}

export default Interruptor
