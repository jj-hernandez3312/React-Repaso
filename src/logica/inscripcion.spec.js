import { validarInscripcion, esValida } from './inscripcion'

describe('validarInscripcion', () => {
  let datos

  beforeEach(() => {
    datos = { nombre: 'Camila', jornada: 'diurna', sede: 'vina', comentario: '', acepta: true }
  })

  it('no reporta errores con datos completos', () => {
    expect(validarInscripcion(datos)).toEqual({})
    expect(esValida(datos)).toBeTrue()
  })

  it('exige al menos 3 letras en el nombre', () => {
    datos.nombre = 'Ca'
    expect(validarInscripcion(datos).nombre).toBeDefined()
  })

  it('ignora los espacios al validar el nombre', () => {
    datos.nombre = '   '
    expect(validarInscripcion(datos).nombre).toBe('Escribe al menos 3 letras')
  })

  it('exige elegir una sede', () => {
    datos.sede = ''
    expect(validarInscripcion(datos).sede).toBeDefined()
  })

  it('exige aceptar las condiciones', () => {
    datos.acepta = false
    expect(esValida(datos)).toBeFalse()
  })

  it('acumula varios errores a la vez', () => {
    const vacios = { nombre: '', sede: '', acepta: false }
    expect(Object.keys(validarInscripcion(vacios)).length).toBe(3)
  })
})
