export const NOTA_MINIMA = 4

export function estaAprobado(nota) {
  return nota >= NOTA_MINIMA
}

export function mensajePara(nota) {
  if (nota >= 6) return 'Excelente'
  if (estaAprobado(nota)) return 'Aprobado'
  return 'Reprobado'
}
