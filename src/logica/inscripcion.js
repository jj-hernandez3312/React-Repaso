export function validarInscripcion(datos) {
  const errores = {}
  if (datos.nombre.trim().length < 3) errores.nombre = 'Escribe al menos 3 letras'
  if (datos.sede === '') errores.sede = 'Elige una sede'
  if (!datos.acepta) errores.acepta = 'Debes aceptar las condiciones'
  return errores
}

export function esValida(datos) {
  return Object.keys(validarInscripcion(datos)).length === 0
}
