import { obtenerTitulos } from './api'

describe('obtenerTitulos', () => {
  it('devuelve solo los títulos', async () => {
    // Doble de prueba: imita la respuesta de fetch sin salir a internet
    const traerFalso = jasmine.createSpy('traer').and.returnValue(
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ title: 'uno' }, { title: 'dos' }]),
      }),
    )

    const titulos = await obtenerTitulos(3, traerFalso)

    expect(titulos).toEqual(['uno', 'dos'])
    expect(traerFalso).toHaveBeenCalledTimes(1)
    // Se revisa que la URL incluya el usuario pedido
    expect(traerFalso.calls.mostRecent().args[0]).toContain('userId=3')
  })

  it('lanza un error si la respuesta falla', async () => {
    const traerFalso = () => Promise.resolve({ ok: false, status: 404 })
    await expectAsync(obtenerTitulos(1, traerFalso)).toBeRejectedWithError('Error 404')
  })
})
