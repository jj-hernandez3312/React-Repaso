import { useState, useEffect } from 'react'
import './Reloj.css'

function Reloj() {
  const [hora, setHora] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setHora(new Date()), 1000)
    console.log('Reloj montado: intervalo iniciado')
    // Sin esta limpieza el intervalo seguiría corriendo después de desmontar
    return () => {
      clearInterval(id)
      console.log('Reloj desmontado: intervalo detenido')
    }
  }, [])

  return <p className="reloj">{hora.toLocaleTimeString('es-CL')}</p>
}

function DemoReloj() {
  const [activo, setActivo] = useState(true)

  return (
    <div className="caja">
      <button onClick={() => setActivo(!activo)}>{activo ? 'Desmontar' : 'Montar'} reloj</button>
      {activo && <Reloj />}
    </div>
  )
}

export default DemoReloj
