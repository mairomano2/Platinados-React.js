import { useContext } from "react"
import { Link } from "react-router-dom";
import { MisionesContext } from "../Context/MisionesContext"

export function MisionesCompletadas() {
  const misiones = useContext(MisionesContext);

  const puntajeTotal = () =>  {return misiones.misionesCompletadas.reduce((acum, valor)=>(acum + (valor.cantidad * valor.puntaje)), 0) }

  return (
    <div>
      <h1>Misiones completadas</h1>
      <p>Tu puntaje total es: {puntajeTotal()}</p>
      {misiones.misionesCompletadas.length === 0 ?
        <div>
          <p>No tenés misiones completadas</p>
          <Link to="/">Ver misiones disponibles</Link>
        </div> :
        misiones.misionesCompletadas.map(mision =>
          <div>
            <p>{mision.titulo}</p>
            <p>{mision.puntaje}</p>
            <p>{mision.cantidad}</p>
            <button onClick={() => misiones.borrarMision(mision.id)}>borrar item</button>
          </div>)
      }
    </div>
  )
}
