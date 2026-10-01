import { useState } from 'react'
import './App.css'
import Ejemplo from './components/Ejemplo'

import Saludo from './components/basicos/Saludo'
import Perfil from './components/basicos/Perfil'
import TarjetaPresentacion from './components/jsx/TarjetaPresentacion'
import Composicion from './components/jsx/Composicion'
import Tarjeta from './components/basicos/Tarjeta'
import Caja from './components/basicos/Caja'
import PanelBotones from './components/props/PanelBotones'
import ListaProductos from './components/props/ListaProductos'
import Contador from './components/basicos/Contador'
import Interruptor from './components/estado/Interruptor'
import ContadorCaracteres from './components/estado/ContadorCaracteres'
import PerfilEditable from './components/estado/PerfilEditable'
import NumerosAleatorios from './components/estado/NumerosAleatorios'
import Botones from './components/basicos/Botones'
import EventosComunes from './components/eventos/EventosComunes'
import Estado from './components/basicos/Estado'
import Contrasena from './components/condicional/Contrasena'
import Calificacion from './components/condicional/Calificacion'
import Catalogo from './components/basicos/Catalogo'
import Buscador from './components/listas/Buscador'
import Registro from './components/basicos/Registro'
import Inscripcion from './components/formularios/Inscripcion'
import Usuarios from './components/basicos/Usuarios'
import TituloDocumento from './components/efectos/TituloDocumento'
import DemoReloj from './components/efectos/Reloj'
import PostsPorUsuario from './components/efectos/PostsPorUsuario'
import DemoRender from './components/render/DemoRender'
import ListaTareas from './components/tareas/ListaTareas'

// Cada sección corresponde a un capítulo de la guía en PDF.
const secciones = [
  { id: 'jsx', titulo: 'JSX y componentes' },
  { id: 'props', titulo: 'Props' },
  { id: 'estado', titulo: 'Estado' },
  { id: 'eventos', titulo: 'Eventos' },
  { id: 'condicional', titulo: 'Condicionales' },
  { id: 'listas', titulo: 'Listas' },
  { id: 'formulario', titulo: 'Formularios' },
  { id: 'efecto', titulo: 'useEffect' },
  { id: 'render', titulo: 'Renderizado' },
  { id: 'tareas', titulo: 'Proyecto: tareas' },
]

const C = 'components/'

function App() {
  const [activa, setActiva] = useState('jsx')

  return (
    <div className="app">
      <header>
        <h1>Guía React: primeros pasos</h1>
        <nav>
          {secciones.map((s) => (
            <button
              key={s.id}
              className={s.id === activa ? 'tab activa' : 'tab'}
              onClick={() => setActiva(s.id)}
            >
              {s.titulo}
            </button>
          ))}
        </nav>
      </header>

      <main>
        {activa === 'jsx' && (
          <>
            <Ejemplo titulo="Primer componente" archivo={C + 'basicos/Saludo.jsx'}>
              <Saludo />
            </Ejemplo>
            <Ejemplo titulo="Expresiones y estilos" archivo={C + 'basicos/Perfil.jsx'}>
              <Perfil />
            </Ejemplo>
            <Ejemplo titulo="Datos, cálculos y JSX en variables" archivo={C + 'jsx/TarjetaPresentacion.jsx'}>
              <TarjetaPresentacion />
            </Ejemplo>
            <Ejemplo titulo="Composición de componentes" archivo={C + 'jsx/Composicion.jsx'}>
              <Composicion />
            </Ejemplo>
          </>
        )}

        {activa === 'props' && (
          <>
            <Ejemplo titulo="Props simples y por defecto" archivo={C + 'basicos/Tarjeta.jsx'}>
              <div className="fila">
                <Tarjeta titulo="Teclado" precio={25990} />
                <Tarjeta titulo="Mouse" precio={12990} disponible={false} />
              </div>
            </Ejemplo>
            <Ejemplo titulo="Prop children" archivo={C + 'basicos/Caja.jsx'}>
              <Caja>
                <p>Este párrafo llega al componente Caja a través de la prop children.</p>
              </Caja>
            </Ejemplo>
            <Ejemplo titulo="Funciones como props" archivo={C + 'props/PanelBotones.jsx'}>
              <PanelBotones />
            </Ejemplo>
            <Ejemplo titulo="Objetos como props" archivo={C + 'props/ListaProductos.jsx'}>
              <ListaProductos />
            </Ejemplo>
          </>
        )}

        {activa === 'estado' && (
          <>
            <Ejemplo titulo="Número" archivo={C + 'basicos/Contador.jsx'}>
              <Contador />
            </Ejemplo>
            <Ejemplo titulo="Booleano" archivo={C + 'estado/Interruptor.jsx'}>
              <Interruptor />
            </Ejemplo>
            <Ejemplo titulo="Texto y valores derivados" archivo={C + 'estado/ContadorCaracteres.jsx'}>
              <ContadorCaracteres />
            </Ejemplo>
            <Ejemplo titulo="Objeto" archivo={C + 'estado/PerfilEditable.jsx'}>
              <PerfilEditable />
            </Ejemplo>
            <Ejemplo titulo="Arreglo" archivo={C + 'estado/NumerosAleatorios.jsx'}>
              <NumerosAleatorios />
            </Ejemplo>
          </>
        )}

        {activa === 'eventos' && (
          <>
            <Ejemplo titulo="onClick" archivo={C + 'basicos/Botones.jsx'}>
              <Botones />
            </Ejemplo>
            <Ejemplo titulo="Otros eventos y el objeto evento" archivo={C + 'eventos/EventosComunes.jsx'}>
              <EventosComunes />
            </Ejemplo>
          </>
        )}

        {activa === 'condicional' && (
          <>
            <Ejemplo titulo="if, ternario y &&" archivo={C + 'basicos/Estado.jsx'}>
              <Estado conectado={true} mensajes={3} />
              <Estado conectado={true} mensajes={0} />
              <Estado conectado={false} mensajes={5} />
            </Ejemplo>
            <Ejemplo titulo="Mostrar u ocultar contraseña" archivo={C + 'condicional/Contrasena.jsx'}>
              <Contrasena />
            </Ejemplo>
            <Ejemplo titulo="Varias condiciones y clases" archivo={C + 'condicional/Calificacion.jsx'}>
              <Calificacion />
            </Ejemplo>
          </>
        )}

        {activa === 'listas' && (
          <>
            <Ejemplo titulo="map y key" archivo={C + 'basicos/Catalogo.jsx'}>
              <Catalogo />
            </Ejemplo>
            <Ejemplo titulo="Buscar, filtrar y ordenar" archivo={C + 'listas/Buscador.jsx'}>
              <Buscador />
            </Ejemplo>
          </>
        )}

        {activa === 'formulario' && (
          <>
            <Ejemplo titulo="Formulario controlado" archivo={C + 'basicos/Registro.jsx'}>
              <Registro />
            </Ejemplo>
            <Ejemplo titulo="Radio, select, checkbox y validación" archivo={C + 'formularios/Inscripcion.jsx'}>
              <Inscripcion />
            </Ejemplo>
          </>
        )}

        {activa === 'efecto' && (
          <>
            <Ejemplo titulo="Efecto con dependencia" archivo={C + 'efectos/TituloDocumento.jsx'}>
              <TituloDocumento />
            </Ejemplo>
            <Ejemplo titulo="Temporizador y limpieza" archivo={C + 'efectos/Reloj.jsx'}>
              <DemoReloj />
            </Ejemplo>
            <Ejemplo titulo="Pedir datos una vez" archivo={C + 'basicos/Usuarios.jsx'}>
              <Usuarios />
            </Ejemplo>
            <Ejemplo titulo="Pedir datos según una selección" archivo={C + 'efectos/PostsPorUsuario.jsx'}>
              <PostsPorUsuario />
            </Ejemplo>
          </>
        )}

        {activa === 'render' && <DemoRender />}
        {activa === 'tareas' && <ListaTareas />}
      </main>
    </div>
  )
}

export default App
