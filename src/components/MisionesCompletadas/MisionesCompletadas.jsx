import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { getFirestore } from "../../service/getFirestore";
import { MisionesContext } from "../Context/MisionesContext"
import "./misionesCompletadas.css"

export function MisionesCompletadas() {

  const [cargando, setCargando] = useState(true)
  const [misionesCompletadas, setMisionesCmisionesCompletadas] = useState([])
  const misiones = useContext(MisionesContext);

  const dbQuery = getFirestore()
  dbQuery.collection("misionesCompletadas").get()
        .then(data => setMisionesCmisionesCompletadas(data.docs.map(mision => ({ id: mision.id, ...mision.data() }))))
        .catch(error => console.log(error))
        .finally(() => { setCargando(false) })

  const puntajeTotal = () => { return misiones.misionesCompletadas.reduce((acum, valor) => (acum + (valor.cantidad * valor.puntaje)), 0) }

  // const guardarMisiones = (e) => {
  //   e.preventDefault()

  //   const misionesGuardadas = {}

  //   misionesGuardadas.puntajeTotal = puntajeTotal()
  //   misionesGuardadas.mision = misiones.misionesCompletadas.map(m => {
  //     const id = m.id
  //     const titulo = m.titulo
  //     const descripcion = m.descripcion
  //     const puntaje = m.puntaje * m.cantidad
  //     return { id, titulo, descripcion, puntaje }
  //   })

  //   const dbQuery = getFirestore()
  //   dbQuery.collection("misionesGuardadas").add(misionesGuardadas)
  //   .then(res => console.log(res))
  //   .catch( err => console.log(err))
  //   .finally(alert("tus misiones fueron guardadas con exito"))
  // }

  return(
    <div className="misiones-completadas">
      <h1 className="titulo">Misiones completadas</h1>
      <div className="puntaje">
        <img src="https://img.icons8.com/emoji/48/000000/star-emoji.png"/>
        <h2 className="subtitulos">Tu puntaje total es: {puntajeTotal()}</h2>
        <img src="https://img.icons8.com/emoji/48/000000/star-emoji.png"/>
      </div>

      {cargando ? <h2 className="subtitulos">Cargando...</h2> :
        misionesCompletadas.length === 0 ?
          <div>
            <p className="parrafos">No tenes misiones completadas</p> 
            <Link to="/misiones" className="parrafos">Ver misiones disponibles</Link> 
          </div> :
          <div>
            <p className="parrafos">{misionesCompletadas.titulo}</p>
            <p className="parrafos">{misionesCompletadas.descripcion}</p>
            <p className="parrafos">{misionesCompletadas.puntaje}</p>
          </div>
      }
    </div>
  )

  // return (
  //   <div>
  //     <h1>Misiones completadas</h1>
  //     <div>
  //       
  //     </div>
  //     {misiones.misionesCompletadas.length === 0 ?
  //       <div>
  //         <p>No tenés misiones completadas</p>
  //         <Link to="/misiones">Ver misiones disponibles</Link>
  //       </div> :
  //       misiones.misionesCompletadas.map(mision =>
  //         <div>
  //           <p>{mision.titulo}</p>
  //           <p>{mision.puntaje}</p>
  //           <p>{mision.cantidad}</p>
  //           {/* <form onSubmit={guardarMisiones}>
  //             <button>Guardar misiones</button>
  //           </form> */}
  //         </div>)
  //     }
  //   </div>
  // )
}

// TODO hacer un loading en el finally de cuando se suben las misiones guardadas
// cambiar el alert por un modal