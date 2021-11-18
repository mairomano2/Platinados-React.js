import {Boton} from "../Boton/Boton"

export const ItemDetail = ({mision}) => {
  return (
    <div>
      <p className="parrafos">{mision.categoria}</p>
      <p className="parrafos">{mision.titulo}</p>
      <p className="parrafos">{mision.descripcion}</p>
      <p className="parrafos">{mision.puntaje}</p>
      <Boton texto="Marcar como completada" />
    </div>
  )
}