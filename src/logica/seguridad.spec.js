import { nivelSeguridad } from './seguridad'

describe('nivelSeguridad', () => {
  it('califica como débil una clave corta', () => {
    expect(nivelSeguridad('abc')).toBe('Débil')
  })

  it('califica como media una clave de 6 o 7 letras', () => {
    expect(nivelSeguridad('abcdef')).toBe('Media')
    expect(nivelSeguridad('abcdefg')).toBe('Media')
  })

  it('califica como fuerte una clave larga con números', () => {
    expect(nivelSeguridad('abcdefg1')).toBe('Fuerte')
  })

  it('no considera fuerte una clave larga sin números', () => {
    expect(nivelSeguridad('abcdefghij')).not.toBe('Fuerte')
  })

  it('trata la clave vacía como débil', () => {
    expect(nivelSeguridad('')).toBe('Débil')
  })
})
