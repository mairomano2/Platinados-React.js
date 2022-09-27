import { Link } from "react-router-dom"
import "./NavBarMisiones.css"

export const NavBarMisiones = () => {
  return (
    <div className="filtros">
      <h2 className="subtitulos">Filtrar por: </h2>
      <div className="contenedor-filtros">
        <Link className="contenedor-decorado" to="/misiones">Todas</Link>
        <Link className="contenedor-decorado" to="/categoria/finanzas">Finanzas</Link>
        <Link className="contenedor-decorado" to="/categoria/cocina">Cocina</Link>
        <Link className="contenedor-decorado" to="/categoria/cuidado-personal">Cuidado personal</Link>
        <Link className="contenedor-decorado" to="/categoria/fisico">Físico</Link>
      </div>
    </div>
  )
}

export default NavBarMisiones