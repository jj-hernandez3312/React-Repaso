import { formatearPesos, numeroAleatorio } from './formato'

// describe agrupa pruebas relacionadas
describe('formatearPesos', () => {
  // it describe una conducta esperada, en una frase
  it('agrega el signo peso y separa los miles', () => {
    expect(formatearPesos(25990)).toBe('$25.990')
  })

  it('funciona con el cero', () => {
    expect(formatearPesos(0)).toBe('$0')
  })

  it('devuelve un texto', () => {
    expect(typeof formatearPesos(100)).toBe('string')
  })
})

describe('numeroAleatorio', () => {
  it('entrega un valor dentro del rango pedido', () => {
    for (let i = 0; i < 50; i++) {
      const n = numeroAleatorio(10)
      expect(n).toBeGreaterThanOrEqual(1)
      expect(n).toBeLessThanOrEqual(10)
    }
  })

  it('usa Math.random (espía)', () => {
    // El espía reemplaza a Math.random y siempre devuelve 0.5
    spyOn(Math, 'random').and.returnValue(0.5)
    expect(numeroAleatorio(100)).toBe(51)
    expect(Math.random).toHaveBeenCalled()
    expect(Math.random).toHaveBeenCalledTimes(1)
  })
})
