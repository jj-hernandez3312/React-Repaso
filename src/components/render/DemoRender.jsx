import { useState, memo } from 'react'
import './DemoRender.css'

// Hora exacta del render. Cambia solo cuando React vuelve a ejecutar el componente.
const hora = () => new Date().toLocaleTimeString('es-CL') + '.' + String(Date.now() % 1000).padStart(3, '0')

function HijoConProp({ valor }) {
  console.log('render HijoConProp')
  return (
    <div className="caja">
      <strong>HijoConProp</strong> recibe valor = {valor}
      <br />
      <small className="marca-tiempo">Renderizado a las {hora()}</small>
    </div>
  )
}

function HijoSinProp() {
  console.log('render HijoSinProp')
  return (
    <div className="caja">
      <strong>HijoSinProp</strong> no recibe nada, pero igual se vuelve a renderizar
      <br />
      <small className="marca-tiempo">Renderizado a las {hora()}</small>
    </div>
  )
}

// memo evita el re-render si las props no cambiaron.
const HijoMemo = memo(function HijoMemo() {
  console.log('render HijoMemo')
  return (
    <div className="caja">
      <strong>HijoMemo</strong> envuelto en memo: no se renderiza de nuevo
      <br />
      <small className="marca-tiempo">Renderizado a las {hora()}</small>
    </div>
  )
})

function DemoRender() {
  const [cuenta, setCuenta] = useState(0)
  console.log('render DemoRender (padre)')

  return (
    <div>
      <p>
        Presiona el botón y observa las horas. Abre también la consola del navegador
        (F12). En desarrollo cada mensaje aparece dos veces por StrictMode.
      </p>
      <button onClick={() => setCuenta(cuenta + 1)}>Cambiar estado del padre ({cuenta})</button>
      <p>
        <small className="marca-tiempo">Padre renderizado a las {hora()}</small>
      </p>
      <HijoConProp valor={cuenta} />
      <HijoSinProp />
      <HijoMemo />
    </div>
  )
}

export default DemoRender
