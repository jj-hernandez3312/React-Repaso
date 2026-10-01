import './Composicion.css'

// Un archivo puede tener varios componentes.
// "export" sin default permite importarlos por nombre: import { Encabezado } from './Composicion'

export function Encabezado({ titulo }) {
  return (
    <header className="encabezado">
      <strong>{titulo}</strong>
    </header>
  )
}

export function PiePagina() {
  const anio = new Date().getFullYear()
  return <footer className="pie">© {anio} Mi sitio</footer>
}

// Layout arma la estructura y deja un espacio (children) para el contenido.
function Layout({ titulo, children }) {
  return (
    <div className="layout">
      <Encabezado titulo={titulo} />
      <div className="contenido">{children}</div>
      <PiePagina />
    </div>
  )
}

function Composicion() {
  return (
    <Layout titulo="Mi tienda">
      <p>Este contenido lo decide quien usa Layout.</p>
      <p>El encabezado y el pie se repiten sin volver a escribirlos.</p>
    </Layout>
  )
}

export default Composicion
