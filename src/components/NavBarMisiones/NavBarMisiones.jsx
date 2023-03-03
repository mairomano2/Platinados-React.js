import { Link } from "react-router-dom"
import "./NavBarMisiones.css"

export const NavBarMisiones = () => {
  return (
    <div className="filtros">
      <h2 className="subtitulos">Filtrar por: </h2>
      <div className="contenedor-filtros">
        <Link className="contenedor-decorado" to="/Platinados-React.js/misiones">Todas</Link>
        <Link className="contenedor-decorado" to="/Platinados-React.js/categoria/finanzas">Finanzas</Link>
        <Link className="contenedor-decorado" to="/Platinados-React.js/categoria/cocina">Cocina</Link>
        <Link className="contenedor-decorado" to="/Platinados-React.js/categoria/cuidado-personal">Cuidado personal</Link>
        <Link className="contenedor-decorado" to="/Platinados-React.js/categoria/fisico">Físico</Link>
      </div>
    </div>
  )
}

export default NavBarMisiones