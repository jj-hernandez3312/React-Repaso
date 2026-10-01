import Boton from './Boton'

function PanelBotones() {
  const guardar = () => alert('Guardado')
  const borrar = () => alert('Borrado')

  return (
    <div className="caja">
      <Boton texto="Guardar" variante="primario" onClick={guardar} />
      <Boton texto="Borrar" variante="peligro" onClick={borrar} />
      {/* Escribir solo "deshabilitado" equivale a deshabilitado={true} */}
      <Boton texto="No disponible" deshabilitado />
    </div>
  )
}

export default PanelBotones
