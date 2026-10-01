export function nivelSeguridad(clave) {
  if (clave.length >= 8 && /\d/.test(clave)) return 'Fuerte'
  if (clave.length >= 6) return 'Media'
  return 'Débil'
}
