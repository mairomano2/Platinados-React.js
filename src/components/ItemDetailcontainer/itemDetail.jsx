import { useContext } from "react"
import { Link } from "react-router-dom"
import { getFirestore } from "../../service/getFirestore";
import { MisionesContext } from "../Context/MisionesContext"

export const ItemDetail = ({ mision }) => {
  const m = useContext(MisionesContext);

  const puntajeTotal = () => { return m.misionesCompletadas.reduce((acum, valor) => (acum + (valor.cantidad * valor.puntaje)), 0) }

  const guardarMisiones = (e) => {
    e.preventDefault()

    const misionesGuardadas = {}

    misionesGuardadas.puntajeTotal = puntajeTotal()
    misionesGuardadas.mision = m.misionesCompletadas.map(m => {
      const id = m.id
      const titulo = m.titulo
      const descripcion = m.descripcion
      const puntaje = m.puntaje * m.cantidad
      return { id, titulo, descripcion, puntaje }
    })

    const dbQuery = getFirestore()
    dbQuery.collection("misionesGuardadas").add(misionesGuardadas)
    .then(res => console.log(res))
    .catch( err => console.log(err))
    .finally(alert("tus misiones fueron guardadas con exito"))
  }

  // const handleAdd = (mision, cantidad) => {
  //   mision.cantidad = cantidad;
  //   m.misionesCompletadas = [...m.misionesCompletadas, mision];
  //   console.log(m.misionesCompletadas)
  // }

  return (
    <div>
      <p className="parrafos">Categoria: {mision.categoria}</p>
      <p className="parrafos">Titulo: {mision.titulo}</p>
      <p className="parrafos">Descripcion: {mision.descripcion}</p>
      <p className="parrafos">Puntaje: {mision.puntaje}</p>
      <form onSubmit={guardarMisiones}>
        <button>Guardar misiones</button>
      </form>
      <Link to="/misionesCompletadas">Ver misiones completadas</Link>
    </div>
  )
}

