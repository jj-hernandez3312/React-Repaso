import { useState } from 'react'
import { numeroAleatorio } from '../../logica/formato'

function NumerosAleatorios() {
  const [numeros, setNumeros] = useState([])

  const agregar = () => {
    const nuevo = numeroAleatorio(100)
    setNumeros([...numeros, nuevo]) // arreglo nuevo con el elemento al final
  }

  const quitarUltimo = () => setNumeros(numeros.slice(0, -1))
  const vaciar = () => setNumeros([])

  const suma = numeros.reduce((acumulado, n) => acumulado + n, 0)

  return (
    <div className="caja">
      <button onClick={agregar}>Agregar número</button>
      <button onClick={quitarUltimo} disabled={numeros.length === 0}>
        Quitar último
      </button>
      <button onClick={vaciar}>Vaciar</button>
      <p>Números: {numeros.length > 0 ? numeros.join(', ') : 'ninguno'}</p>
      <p>Suma: {suma}</p>
    </div>
  )
}

export default NumerosAleatorios
