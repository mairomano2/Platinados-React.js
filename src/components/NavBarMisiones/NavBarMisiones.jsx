import { Link } from "react-router-dom"
import "./NavBarMisiones.css"

export const NavBarMisiones = () => {
  return (
    <div className="headerFondo">
      <ul className="navUl">
        <Link to="/finanzas">
          <li className="navLi parrafos navA">finanzas</li>
        </Link>
        <Link to="/cocina">
          <li className="navLi parrafos navA">cocina</li>
        </Link>
        <Link to="/cuidado-personal">
          <li className="navLi parrafos navA">cuidado-personal</li>
        </Link>
        <Link to="/fisico">
          <li className="navLi parrafos navA">fisico</li>
        </Link>
      </ul>
    </div>
  )
}

export default NavBarMisiones