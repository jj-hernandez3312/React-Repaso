// Exportaciones nombradas: se importan con llaves y con el mismo nombre
export const IVA = 0.19

export function conIva(precio) {
  return Math.round(precio * (1 + IVA))
}

// Exportación por defecto: una por archivo, se importa con el nombre que quieras
export default function formatearPesos(valor) {
  return '$' + valor.toLocaleString('es-CL')
}
