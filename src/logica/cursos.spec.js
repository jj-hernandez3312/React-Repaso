import { filtrarPorNombre, ordenarCursos } from './cursos'

describe('cursos', () => {
  let cursos

  // beforeEach corre antes de cada it: cada prueba parte con datos limpios
  beforeEach(() => {
    cursos = [
      { id: 1, nombre: 'Programación Web', creditos: 8 },
      { id: 2, nombre: 'Arquitectura de Software', creditos: 6 },
      { id: 3, nombre: 'Desarrollo Fullstack', creditos: 12 },
    ]
  })

  describe('filtrarPorNombre', () => {
    it('encuentra sin distinguir mayúsculas', () => {
      expect(filtrarPorNombre(cursos, 'DESARROLLO').length).toBe(1)
    })

    it('devuelve todos si la búsqueda está vacía', () => {
      expect(filtrarPorNombre(cursos, '   ').length).toBe(3)
    })

    it('devuelve un arreglo vacío si no hay coincidencias', () => {
      expect(filtrarPorNombre(cursos, 'química')).toEqual([])
    })
  })

  describe('ordenarCursos', () => {
    it('ordena alfabéticamente por nombre', () => {
      const nombres = ordenarCursos(cursos, 'nombre').map((c) => c.nombre)
      expect(nombres).toEqual(['Arquitectura de Software', 'Desarrollo Fullstack', 'Programación Web'])
    })

    it('ordena por créditos de mayor a menor', () => {
      expect(ordenarCursos(cursos, 'creditos')[0].creditos).toBe(12)
    })

    it('no modifica el arreglo original', () => {
      ordenarCursos(cursos, 'nombre')
      expect(cursos[0].nombre).toBe('Programación Web')
    })
  })
})
