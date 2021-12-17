import { useContext } from "react"
import { Link } from "react-router-dom"
import { getFirestore } from "../../service/getFirestore";
import { MisionesContext } from "../Context/MisionesContext"
import "./detalle.css"

export const ItemDetail = ({ mision }) => {
  const misiones = useContext(MisionesContext);

  const guardarMisiones = (e) => {
    e.preventDefault()

    const misionesGuardadas = {}

    misionesGuardadas.puntajeTotal = misiones.puntajeTotal
    misionesGuardadas.mision = mision

    const dbQuery = getFirestore()
    dbQuery.collection("misionesGuardadas").add(misionesGuardadas.mision)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .finally(alert("tus misiones fueron guardadas con exito"))
  }

  return (
    <div className="detalle">
      <h1 className="titulo">Detalle de la misión</h1>
      <div className="mision">
        <p className="parrafos">Titulo: {mision.titulo}</p>
        <p className="parrafos">Categoria: {mision.categoria}</p>
        <p className="parrafos">Descripcion: {mision.descripcion}</p>
        <p className="parrafos">Puntaje: {mision.puntaje}</p>
        <form onSubmit={guardarMisiones}>
          <button className="boton-personalizado">Guardar misiones</button>
        </form>
      </div>
      <Link to="/misionesCompletadas">Ver misiones completadas</Link>
    </div>
  )
}

