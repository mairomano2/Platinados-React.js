import { Link } from "react-router-dom"
import "./NavBarMisiones.css"

export const NavBarMisiones = () => {
  return (
    <div className="filtros">
      <h2 className="subtitulos">Filtrar por: </h2>
      <ul>
        <Link to="/finanzas">
          <li className="contenedor-decorado">finanzas</li>
        </Link>
        <Link to="/cocina">
          <li className="contenedor-decorado">cocina</li>
        </Link>
        <Link to="/cuidado-personal">
          <li className="contenedor-decorado">cuidado-personal</li>
        </Link>
        <Link to="/fisico">
          <li className="contenedor-decorado">fisico</li>
        </Link>
      </ul>
    </div>
  )
}

export default NavBarMisiones