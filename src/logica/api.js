// El segundo parámetro permite reemplazar fetch por una función falsa en las pruebas.
export async function obtenerTitulos(usuarioId, traer = fetch) {
  const res = await traer(`https://jsonplaceholder.typicode.com/posts?userId=${usuarioId}`)
  if (!res.ok) throw new Error('Error ' + res.status)
  const datos = await res.json()
  return datos.map((p) => p.title)
}
