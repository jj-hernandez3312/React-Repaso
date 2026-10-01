import { useState } from 'react'
import {
  crearTarea,
  agregarTarea,
  alternarTarea,
  eliminarTarea,
  contarPendientes,
} from '../../logica/tareas'
import FormTarea from './FormTarea'
import './ListaTareas.css'
import ItemTarea from './ItemTarea'

// El estado vive aquí (componente padre). Los hijos solo avisan mediante funciones.
function ListaTareas() {
  const [tareas, setTareas] = useState([])

  // Cada operación está en src/logica/tareas.js y tiene sus pruebas en tareas.spec.js
  const agregar = (texto) => setTareas(agregarTarea(tareas, crearTarea(texto)))
  const alternar = (id) => setTareas(alternarTarea(tareas, id))
  const eliminar = (id) => setTareas(eliminarTarea(tareas, id))

  const pendientes = contarPendientes(tareas)

  return (
    <section>
      <h2>Mis tareas</h2>
      <FormTarea onAgregar={agregar} />

      {tareas.length === 0 ? (
        <p>No hay tareas todavía.</p>
      ) : (
        <>
          <ul className="lista-tareas">
            {tareas.map((t) => (
              <ItemTarea key={t.id} tarea={t} onAlternar={alternar} onEliminar={eliminar} />
            ))}
          </ul>
          <p>Pendientes: {pendientes}</p>
        </>
      )}
    </section>
  )
}

export default ListaTareas
