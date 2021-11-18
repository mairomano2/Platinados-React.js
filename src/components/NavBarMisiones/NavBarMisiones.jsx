import { Link } from "react-router-dom"
import "./NavBarMisones.css"

export const NavBar = () => {
  return (
    <div className="headerFondo">
      <Link to="/">
        <img src="https://img.icons8.com/pastel-glyph/64/ffffff/home.png" className="navImg"/>
      </Link>
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

export default NavBar