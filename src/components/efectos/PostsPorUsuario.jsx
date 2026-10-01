import { useState, useEffect } from 'react'

function PostsPorUsuario() {
  const [usuarioId, setUsuarioId] = useState(1)
  const [posts, setPosts] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelado = false // evita guardar la respuesta de una petición vieja

    const cargar = async () => {
      setCargando(true)
      setError(null)
      try {
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${usuarioId}`
        const res = await fetch(url)
        if (!res.ok) throw new Error('Error ' + res.status)
        const datos = await res.json()
        if (!cancelado) setPosts(datos.slice(0, 5))
      } catch (err) {
        if (!cancelado) setError(err.message)
      } finally {
        if (!cancelado) setCargando(false)
      }
    }

    cargar()
    return () => {
      cancelado = true
    }
  }, [usuarioId]) // se repite cada vez que cambia el usuario elegido

  return (
    <div className="caja">
      <select value={usuarioId} onChange={(e) => setUsuarioId(Number(e.target.value))}>
        {[1, 2, 3, 4, 5].map((id) => (
          <option key={id} value={id}>
            Usuario {id}
          </option>
        ))}
      </select>

      {cargando && <p>Cargando...</p>}
      {error && <p className="alerta">{error}</p>}
      {!cargando && !error && (
        <ol>
          {posts.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default PostsPorUsuario
