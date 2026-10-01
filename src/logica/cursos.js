export function filtrarPorNombre(cursos, busqueda) {
  const texto = busqueda.trim().toLowerCase()
  if (texto === '') return cursos
  return cursos.filter((c) => c.nombre.toLowerCase().includes(texto))
}

export function ordenarCursos(cursos, criterio) {
  // Se ordena una copia para no modificar el arreglo recibido
  return [...cursos].sort((a, b) =>
    criterio === 'nombre' ? a.nombre.localeCompare(b.nombre) : b.creditos - a.creditos,
  )
}
