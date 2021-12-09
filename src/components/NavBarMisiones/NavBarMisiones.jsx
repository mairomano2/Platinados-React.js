import { Link } from "react-router-dom"
import "./NavBarMisiones.css"

export const NavBarMisiones = () => {
  return (
    <div className="filtros">
      <h2 className="subtitulos">Filtrar por: </h2>
      <ul>
        <Link to="/finanzas">
          <li className="boton-personalizado">finanzas</li>
        </Link>
        <Link to="/cocina">
          <li className="boton-personalizado">cocina</li>
        </Link>
        <Link to="/cuidado-personal">
          <li className="boton-personalizado">cuidado-personal</li>
        </Link>
        <Link to="/fisico">
          <li className="boton-personalizado">fisico</li>
        </Link>
      </ul>
    </div>
  )
}

export default NavBarMisiones