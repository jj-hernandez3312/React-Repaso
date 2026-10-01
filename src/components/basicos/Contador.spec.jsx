import { act } from 'react'
import { createRoot } from 'react-dom/client'
import Contador from './Contador'

// React necesita saber que está en un entorno de pruebas
globalThis.IS_REACT_ACT_ENVIRONMENT = true

describe('Contador (componente)', () => {
  let contenedor
  let raiz

  beforeEach(() => {
    contenedor = document.createElement('div')
    document.body.appendChild(contenedor)
    raiz = createRoot(contenedor)
  })

  afterEach(() => {
    // Limpieza: cada prueba debe partir con la pantalla vacía
    act(() => raiz.unmount())
    contenedor.remove()
  })

  const renderizar = () => act(() => raiz.render(<Contador />))
  const clicEn = (boton) => act(() => boton.dispatchEvent(new MouseEvent('click', { bubbles: true })))

  it('parte en cero', () => {
    renderizar()
    expect(contenedor.textContent).toContain('Has hecho clic 0 veces')
  })

  it('suma uno por cada clic', () => {
    renderizar()
    const sumar = contenedor.querySelectorAll('button')[0]
    clicEn(sumar)
    clicEn(sumar)
    expect(contenedor.textContent).toContain('Has hecho clic 2 veces')
  })

  it('vuelve a cero con el botón Reiniciar', () => {
    renderizar()
    const [sumar, reiniciar] = contenedor.querySelectorAll('button')
    clicEn(sumar)
    clicEn(reiniciar)
    expect(contenedor.textContent).toContain('Has hecho clic 0 veces')
  })
})
