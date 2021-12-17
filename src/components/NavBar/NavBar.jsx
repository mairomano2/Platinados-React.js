import { Link } from "react-router-dom"
import { useContext } from "react"
import { MisionesContext } from "../Context/MisionesContext"
import "./navBar.css"

export function NavBar() {
  const misiones = useContext(MisionesContext)

  return (
    <nav className="header-fondo">
      <li>
        <Link to="/"> <img src="https://img.icons8.com/pastel-glyph/64/ffffff/home.png" className="img-nav" /> </Link>
      </li>
      <ul className="ul-nav">
        <p className="parrafos">Puntaje: {misiones.puntajeTotal}</p>
        <li>
          <Link to="/comoJugar" class="parrafos">Cómo jugar</Link>
        </li>
        <li>
          <Link to="/misiones" class="parrafos">Misiones</Link>
        </li>
        <li>
          <Link to="/misionesCompletadas" class="parrafos">Misiones Completadas</Link>
        </li>
      </ul>
    </nav>
  )
}