import {Link} from "react-router-dom"
import {Boton} from "../Boton/Boton"

export const Items = ({mision}) => {
  return (
    <div key={mision.id}>
      <p className="parrafos">Titulo: {mision.titulo}</p>
      <p className="parrafos">Categoría: {mision.categoria}</p>
      <p className="parrafos">Puntaje: {mision.puntaje}</p>
      <Link to={`/detalle/${mision.id}`}>
        <Boton texto="Ver detalle" />
      </Link>
    </div>
  )
}