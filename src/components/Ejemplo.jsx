import './Ejemplo.css'

// Marco visual para cada ejemplo: muestra el título y el archivo donde está el código.
function Ejemplo({ titulo, archivo, children }) {
  return (
    <section className="ejemplo">
      <header className="ejemplo-cabecera">
        <h3>{titulo}</h3>
        <code>{archivo}</code>
      </header>
      {children}
    </section>
  )
}

export default Ejemplo
