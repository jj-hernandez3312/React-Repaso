import { useState } from 'react'

import { validarInscripcion } from '../../logica/inscripcion'
import './Inscripcion.css'

const inicial = { nombre: '', jornada: 'diurna', sede: '', comentario: '', acepta: false }

function Inscripcion() {
  const [datos, setDatos] = useState(inicial)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(null)

  // Una sola función para todos los campos: checkbox usa checked, el resto value
  const cambiar = (e) => {
    const { name, value, type, checked } = e.target
    setDatos({ ...datos, [name]: type === 'checkbox' ? checked : value })
  }

  const enviar = (e) => {
    e.preventDefault()
    const encontrados = validarInscripcion(datos)
    setErrores(encontrados)
    if (Object.keys(encontrados).length > 0) return
    setEnviado(datos)
    setDatos(inicial)
  }

  return (
    <>
      <form className="caja formulario" onSubmit={enviar} noValidate>
        <label htmlFor="ins-nombre">Nombre</label>
        <input id="ins-nombre" name="nombre" value={datos.nombre} onChange={cambiar} />
        {errores.nombre && <small className="alerta">{errores.nombre}</small>}

        <span>Jornada</span>
        <label>
          <input type="radio" name="jornada" value="diurna"
                 checked={datos.jornada === 'diurna'} onChange={cambiar} />
          Diurna
        </label>
        <label>
          <input type="radio" name="jornada" value="vespertina"
                 checked={datos.jornada === 'vespertina'} onChange={cambiar} />
          Vespertina
        </label>

        <label htmlFor="ins-sede">Sede</label>
        <select id="ins-sede" name="sede" value={datos.sede} onChange={cambiar}>
          <option value="">Selecciona...</option>
          <option value="vina">Viña del Mar</option>
          <option value="valparaiso">Valparaíso</option>
          <option value="santiago">Santiago</option>
        </select>
        {errores.sede && <small className="alerta">{errores.sede}</small>}

        <label htmlFor="ins-comentario">Comentario (opcional)</label>
        <textarea id="ins-comentario" name="comentario" rows={3}
                  value={datos.comentario} onChange={cambiar} />

        <label>
          <input type="checkbox" name="acepta" checked={datos.acepta} onChange={cambiar} />
          Acepto las condiciones
        </label>
        {errores.acepta && <small className="alerta">{errores.acepta}</small>}

        <button type="submit">Inscribirme</button>
      </form>

      {enviado && <pre className="caja resultado">{JSON.stringify(enviado, null, 2)}</pre>}
    </>
  )
}

export default Inscripcion
