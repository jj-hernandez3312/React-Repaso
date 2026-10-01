import { useState } from 'react'

function PerfilEditable() {
  const [perfil, setPerfil] = useState({ nombre: 'Ana', ciudad: 'Viña del Mar', edad: 20 })

  // Se copia el objeto con ...perfil y se reemplaza solo la propiedad que cambia
  const cumplirAnios = () => setPerfil({ ...perfil, edad: perfil.edad + 1 })
  const mudarse = () => setPerfil({ ...perfil, ciudad: 'Valparaíso' })

  return (
    <div className="caja">
      <p>
        {perfil.nombre}, {perfil.edad} años, vive en {perfil.ciudad}
      </p>
      <button onClick={cumplirAnios}>Cumplir años</button>
      <button onClick={mudarse}>Mudarse a Valparaíso</button>
    </div>
  )
}

export default PerfilEditable
