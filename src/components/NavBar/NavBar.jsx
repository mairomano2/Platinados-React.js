import { Link } from "react-router-dom"
import { useContext } from "react"
import { MisionesContext } from "../Context/MisionesContext"
import "./navBar.css"

export function NavBar() {
  const misiones = useContext(MisionesContext)

  return (
    <nav className="header-fondo stroke">
      <Link to="/"> <img src="https://img.icons8.com/pastel-glyph/64/ffffff/home.png" className="img-nav" /> </Link>
      <ul className="ul-nav">
        <p className="parrafos">Puntaje: {misiones.puntajeTotal}</p>
        <li>
          <Link to="/comoJugar" className="parrafos link">Cómo jugar</Link>
        </li>
        <li>
          <Link to="/misiones" className="parrafos link">Misiones</Link>
        </li>
        <li>
          <Link to="/misionesCompletadas" className="parrafos link">Misiones Completadas</Link>
        </li>
      </ul>
    </nav>
  )
}