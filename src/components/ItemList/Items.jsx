import { Link } from "react-router-dom"

export const Items = ({ mision }) => {
  return (
    <div key={mision.id} className="contenedor-decorado">
      <p className="parrafos">Titulo: {mision.titulo}</p>
      <p className="parrafos">Categoría: {mision.categoria}</p>
      <p className="parrafos">Puntaje: {mision.puntaje}</p>
      <Link to={`/detalle/${mision.id}`}>
        <button type="button" className="boton-personalizado">Ver detalles</button>
      </Link>
    </div>
  )
}