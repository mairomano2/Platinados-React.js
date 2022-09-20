import { useContext } from "react"
import { Link } from "react-router-dom";
import { MisionesContext } from "../Context/MisionesContext"
import "./misionesCompletadas.css"

export function MisionesCompletadas() {

  const misiones = useContext(MisionesContext)

  return (
    <div className="div-general">
      <h1 className="titulo">Misiones completadas</h1>
      <div className="puntaje-total">
        <img src="https://img.icons8.com/emoji/48/000000/star-emoji.png" />
        <h2 className="subtitulos">Tu puntaje total es: {misiones.puntajeTotal}</h2>
        <img src="https://img.icons8.com/emoji/48/000000/star-emoji.png" />
      </div>

      {misiones.cargando ? <h2 className="subtitulos">Cargando...</h2> :
        misiones.misionesCompletadas.length === 0 ?
          <div>
            <p className="parrafos">No tenes misiones completadas</p>
            <Link to="/misiones" className="parrafos link">Ver misiones disponibles</Link>
          </div> :
          misiones.misionesCompletadas.map( (mision) =>
            <div key={mision.id} className="contenedor-decorado misiones">
              <p className="parrafos">Misión: {mision.titulo}</p>
              <p className="parrafos">Descripción: {mision.descripcion}</p>
              <p className="parrafos">Puntaje: {mision.puntaje}</p>
            </div>)
      }
    </div>
  )
}

