import './Boton.css'

// Componente reutilizable: todo lo que cambia entre un botón y otro llega por props.
function Boton({ texto, variante = 'normal', deshabilitado = false, onClick }) {
  return (
    <button className={`boton boton-${variante}`} disabled={deshabilitado} onClick={onClick}>
      {texto}
    </button>
  )
}

export default Boton
