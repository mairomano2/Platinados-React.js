import { Link } from "react-router-dom"
import "./NavBarMisiones.css"

export const NavBarMisiones = () => {
  return (
    <div className="filtros">
      <h2 className="subtitulos">Filtrar por: </h2>
      <ul>
        <Link to="/misiones">
          <li className="contenedor-decorado">Todas</li>
        </Link>
        <Link to="/categoria/finanzas">
          <li className="contenedor-decorado">Finanzas</li>
        </Link>
        <Link to="/categoria/cocina">
          <li className="contenedor-decorado">Cocina</li>
        </Link>
        <Link to="/categoria/cuidado-personal">
          <li className="contenedor-decorado">Cuidado personal</li>
        </Link>
        <Link to="/categoria/fisico">
          <li className="contenedor-decorado">Físico</li>
        </Link>
      </ul>
    </div>
  )
}

export default NavBarMisiones