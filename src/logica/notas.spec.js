import { estaAprobado, mensajePara, NOTA_MINIMA } from './notas'

describe('estaAprobado', () => {
  it('aprueba desde la nota mínima', () => {
    expect(estaAprobado(NOTA_MINIMA)).toBeTrue()
    expect(estaAprobado(4.0)).toBeTrue()
  })

  it('reprueba bajo la nota mínima', () => {
    expect(estaAprobado(3.9)).toBeFalse()
  })
})

describe('mensajePara', () => {
  // Los casos límite son los que más errores descubren
  const casos = [
    { nota: 7.0, esperado: 'Excelente' },
    { nota: 6.0, esperado: 'Excelente' },
    { nota: 5.9, esperado: 'Aprobado' },
    { nota: 4.0, esperado: 'Aprobado' },
    { nota: 3.9, esperado: 'Reprobado' },
    { nota: 1.0, esperado: 'Reprobado' },
  ]

  casos.forEach(({ nota, esperado }) => {
    it(`con nota ${nota} devuelve "${esperado}"`, () => {
      expect(mensajePara(nota)).toBe(esperado)
    })
  })
})
