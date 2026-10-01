import './TarjetaPresentacion.css'

// Datos fuera del componente: no cambian, así que no necesitan estado.
const persona = {
  nombre: 'Valentina Rojas',
  carrera: 'Ingeniería en Informática',
  semestre: 2,
  intereses: ['React', 'Bases de datos', 'Diseño'],
}

function TarjetaPresentacion() {
  // Cálculos normales de JavaScript antes del return
  const iniciales = persona.nombre
    .split(' ')
    .map((palabra) => palabra[0])
    .join('')
  const esPrimerAnio = persona.semestre <= 2

  // Una variable también puede guardar JSX
  const etiqueta = esPrimerAnio ? <span className="badge">Primer año</span> : null

  return (
    <div className="caja">
      {/* Así se escribe un comentario dentro de JSX */}
      <div className="avatar-texto">{iniciales}</div>
      <h3>
        {persona.nombre} {etiqueta}
      </h3>
      <p>
        {persona.carrera}, semestre {persona.semestre}
      </p>
      <p>Intereses: {persona.intereses.join(', ')}</p>
      <p>Cantidad de intereses: {persona.intereses.length}</p>
    </div>
  )
}

export default TarjetaPresentacion
