// Funciones puras: misma entrada, misma salida, sin tocar el DOM.
// Al estar separadas de los componentes se pueden probar con facilidad.

export function formatearPesos(valor) {
  return '$' + valor.toLocaleString('es-CL')
}

export function numeroAleatorio(maximo = 100) {
  return Math.floor(Math.random() * maximo) + 1
}
