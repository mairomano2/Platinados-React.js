import {Boton} from "../Boton/Boton"

export const Items = ({mision}) => {
  return (
    <div key={mision.id}>
      <p className="parrafos">{mision.titulo}</p>
      <p className="parrafos">{mision.descripcion}</p>
      <p className="parrafos">{mision.puntaje}</p>
      <Boton texto="Marcar como completada" />
    </div>
  )
}

export default Items

