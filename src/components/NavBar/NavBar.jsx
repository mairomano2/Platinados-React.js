import { Link } from "react-router-dom"
import "./navBar.css"

export function NavBar() {
  return (
    <nav className="header-fondo">
      <li>
        <Link to="/"> <img src="https://img.icons8.com/pastel-glyph/64/ffffff/home.png" className="img-nav" /> </Link>
      </li>
      <ul className="ul-nav">
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