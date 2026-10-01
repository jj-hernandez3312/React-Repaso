import { useState } from 'react'
import { filtrarPorNombre, ordenarCursos } from '../../logica/cursos'
// Un CSS Module se importa como un objeto: estilos.controles es el nombre real de la clase
import estilos from './Buscador.module.css'

const cursos = [
  { id: 1, nombre: 'Fundamentos de Programación', creditos: 10 },
  { id: 2, nombre: 'Programación de Base de Datos', creditos: 8 },
  { id: 3, nombre: 'Desarrollo Fullstack', creditos: 12 },
  { id: 4, nombre: 'Arquitectura de Software', creditos: 6 },
  { id: 5, nombre: 'Programación Web', creditos: 8 },
  { id: 6, nombre: 'Estadística', creditos: 6 },
]

function Buscador() {
  const [busqueda, setBusqueda] = useState('')
  const [orden, setOrden] = useState('nombre')

  // Filtrar y ordenar están en src/logica/cursos.js: funciones puras y probadas
  const ordenados = ordenarCursos(filtrarPorNombre(cursos, busqueda), orden)

  return (
    <div className="caja">
      <div className={estilos.controles}>
        <input placeholder="Buscar curso" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
        <select value={orden} onChange={(e) => setOrden(e.target.value)}>
          <option value="nombre">Ordenar por nombre</option>
          <option value="creditos">Ordenar por créditos</option>
        </select>
      </div>

      <p className={estilos.resumen}>
        {ordenados.length} de {cursos.length} cursos
      </p>

      {ordenados.length === 0 ? (
        <p className={estilos.vacio}>No hay coincidencias</p>
      ) : (
        <ul className={estilos.lista}>
          {ordenados.map((c) => (
            <li key={c.id}>
              {c.nombre} ({c.creditos} créditos)
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Buscador
