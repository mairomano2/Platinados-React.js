import { Link } from "react-router-dom"

export function NavBar() {
  return (
    <nav className="headerFondo">
      <ul>
        <li>
          <Link to="/"> <img src="https://img.icons8.com/pastel-glyph/64/ffffff/home.png" /> </Link>
        </li>
        <li>
          <Link to="/comoJugar">Cómo jugar</Link>
        </li>
        <li>
          <Link to="/misiones">Misiones</Link>
        </li>
        <li>
          <Link to="/misionesCompletadas">Misiones Completadas</Link>
        </li>
      </ul>
    </nav>
  )
}