import { useState, useEffect } from 'react'

function TituloDocumento() {
  const [clics, setClics] = useState(0)

  // Se ejecuta al montar y cada vez que cambia "clics"
  useEffect(() => {
    document.title = `Clics: ${clics}`
    // Limpieza: al salir de esta pestaña se restaura el título original
    return () => {
      document.title = 'Guía React: primeros pasos'
    }
  }, [clics])

  return (
    <div className="caja">
      <p>Mira el título de la pestaña del navegador.</p>
      <button onClick={() => setClics(clics + 1)}>Clic ({clics})</button>
    </div>
  )
}

export default TituloDocumento
