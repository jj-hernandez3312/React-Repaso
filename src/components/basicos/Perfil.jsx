import './Perfil.css'

function Perfil() {
  const nombre = 'Ana'
  const edad = 21
  const foto = '/favicon.svg'

  return (
    <div className="caja">
      <img src={foto} alt={nombre} className="avatar" />
      <h3>{nombre.toUpperCase()}</h3>
      <p>El próximo año tendrá {edad + 1} años.</p>
      <p style={{ color: 'white', backgroundColor: '#087EA4', padding: 8 }}>
        Texto destacado con estilo en línea
      </p>
    </div>
  )
}

export default Perfil
