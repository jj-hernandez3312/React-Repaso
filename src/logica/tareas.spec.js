import { crearTarea, agregarTarea, alternarTarea, eliminarTarea, contarPendientes } from './tareas'

describe('tareas', () => {
  let lista

  beforeEach(() => {
    lista = [
      { id: 'a', texto: 'Estudiar', hecha: false },
      { id: 'b', texto: 'Hacer ejercicio', hecha: true },
    ]
  })

  describe('crearTarea', () => {
    it('crea la tarea sin completar y sin espacios sobrantes', () => {
      const t = crearTarea('  Leer  ', 'x1')
      expect(t).toEqual({ id: 'x1', texto: 'Leer', hecha: false })
    })

    it('genera un id si no se entrega uno', () => {
      expect(crearTarea('Leer').id).toBeDefined()
    })
  })

  describe('agregarTarea', () => {
    it('agrega al final y devuelve un arreglo nuevo', () => {
      const nueva = crearTarea('Leer', 'c')
      const resultado = agregarTarea(lista, nueva)
      expect(resultado.length).toBe(3)
      expect(resultado[2]).toBe(nueva)
      expect(lista.length).toBe(2) // el original no cambia
    })
  })

  describe('alternarTarea', () => {
    it('cambia el estado de la tarea indicada', () => {
      expect(alternarTarea(lista, 'a')[0].hecha).toBeTrue()
    })

    it('deja igual a las demás', () => {
      expect(alternarTarea(lista, 'a')[1].hecha).toBeTrue()
    })

    it('no falla si el id no existe', () => {
      expect(alternarTarea(lista, 'zzz')).toEqual(lista)
    })
  })

  describe('eliminarTarea', () => {
    it('quita solo la tarea indicada', () => {
      const resultado = eliminarTarea(lista, 'a')
      expect(resultado.length).toBe(1)
      expect(resultado[0].id).toBe('b')
    })
  })

  describe('contarPendientes', () => {
    it('cuenta las tareas no completadas', () => {
      expect(contarPendientes(lista)).toBe(1)
    })

    it('devuelve cero con la lista vacía', () => {
      expect(contarPendientes([])).toBe(0)
    })
  })
})
