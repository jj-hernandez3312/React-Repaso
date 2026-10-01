export function crearTarea(texto, id = crypto.randomUUID()) {
  return { id, texto: texto.trim(), hecha: false }
}

export function agregarTarea(lista, tarea) {
  return [...lista, tarea]
}

export function alternarTarea(lista, id) {
  return lista.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t))
}

export function eliminarTarea(lista, id) {
  return lista.filter((t) => t.id !== id)
}

export function contarPendientes(lista) {
  return lista.filter((t) => !t.hecha).length
}
