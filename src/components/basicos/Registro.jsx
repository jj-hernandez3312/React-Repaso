import { useState } from 'react'

function Registro() {
  const [form, setForm] = useState({ nombre: '', correo: '' })

  const manejarCambio = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const manejarEnvio = (e) => {
    e.preventDefault() // evita que la página se recargue
    if (!form.nombre || !form.correo) {
      alert('Completa todos los campos')
      return
    }
    console.log('Datos enviados:', form)
    alert(`Registrado: ${form.nombre}`)
    setForm({ nombre: '', correo: '' })
  }

  return (
    <form className="caja formulario" onSubmit={manejarEnvio}>
      <label htmlFor="nombre">Nombre</label>
      <input id="nombre" name="nombre" value={form.nombre} onChange={manejarCambio} />

      <label htmlFor="correo">Correo</label>
      <input id="correo" name="correo" type="email" value={form.correo} onChange={manejarCambio} />

      <button type="submit">Registrar</button>
    </form>
  )
}

export default Registro
