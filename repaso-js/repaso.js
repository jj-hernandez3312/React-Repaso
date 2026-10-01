// Repaso de JavaScript para React. Ejecutar con: npm run repaso
import formatearPesos, { IVA, conIva } from './utilidades.js'

const titulo = (texto) => console.log(`\n=== ${texto} ===`)

// 1. const y let --------------------------------------------------
titulo('1. const y let')
const curso = 'React' // no se puede reasignar
let inscritos = 30 // se puede reasignar
inscritos = inscritos + 5
console.log(curso, inscritos)

// 2. Template literals ---------------------------------------------
titulo('2. Template literals')
console.log(`El curso ${curso} tiene ${inscritos} inscritos`)

// 3. Funciones flecha ----------------------------------------------
titulo('3. Funciones flecha')
function sumarClasica(a, b) {
  return a + b
}
const sumar = (a, b) => a + b // retorno implícito
const doble = (n) => n * 2
const crearUsuario = (nombre) => ({ nombre, activo: true }) // objeto: va entre paréntesis
console.log(sumarClasica(2, 3), sumar(2, 3), doble(4), crearUsuario('Ana'))

// 4. Objetos y desestructuración -----------------------------------
titulo('4. Desestructuración')
const alumno = { nombre: 'Pedro', edad: 22, carrera: 'Informática' }
const { nombre, edad } = alumno
const { carrera: programa, sede = 'Viña del Mar' } = alumno // renombrar y valor por defecto
console.log(nombre, edad, programa, sede)

const colores = ['rojo', 'verde', 'azul']
const [primero, segundo] = colores // así funciona const [valor, setValor] = useState()
console.log(primero, segundo)

// 5. Operador spread ( ... ) ---------------------------------------
titulo('5. Spread')
const masColores = [...colores, 'negro'] // copia y agrega
const alumnoMayor = { ...alumno, edad: 23 } // copia y reemplaza una propiedad
console.log(masColores)
console.log(alumnoMayor, '| original sin cambios:', alumno.edad)

// 6. Métodos de arreglos -------------------------------------------
titulo('6. map, filter, find, some, reduce')
const productos = [
  { id: 1, nombre: 'Teclado', precio: 25990, stock: 4 },
  { id: 2, nombre: 'Mouse', precio: 12990, stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 149990, stock: 2 },
]
console.log('map    ->', productos.map((p) => p.nombre))
console.log('filter ->', productos.filter((p) => p.stock > 0).map((p) => p.nombre))
console.log('find   ->', productos.find((p) => p.id === 3))
console.log('some   ->', productos.some((p) => p.stock === 0))
console.log('reduce ->', productos.reduce((total, p) => total + p.precio, 0))

// 7. Condiciones cortas --------------------------------------------
titulo('7. Ternario, &&, ?? y ?.')
const nota = 5.2
console.log(nota >= 4 ? 'Aprobado' : 'Reprobado')
console.log(nota > 6 && 'Con distinción') // false si no se cumple
const apodo = null
console.log(apodo ?? 'Sin apodo') // ?? usa el valor de la derecha si hay null o undefined
const config = { tema: { color: 'azul' } }
console.log(config.tema?.color, config.idioma?.codigo) // ?. evita errores si no existe

// 8. Módulos -------------------------------------------------------
titulo('8. import / export')
console.log(`IVA ${IVA * 100}%:`, formatearPesos(conIva(10000)))

// 9. Promesas y async/await ----------------------------------------
titulo('9. async / await')
const esperar = (ms) => new Promise((resolver) => setTimeout(resolver, ms))

async function cargarDatos() {
  console.log('Pidiendo datos...')
  await esperar(500) // simula una petición que tarda medio segundo
  return { usuarios: 3 }
}

try {
  const datos = await cargarDatos()
  console.log('Datos recibidos:', datos)
} catch (error) {
  console.log('Algo falló:', error.message)
}
