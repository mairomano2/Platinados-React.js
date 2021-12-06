import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { getFirestore } from "../../service/getFirestore";
import { MisionesContext } from "../Context/MisionesContext"

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
    <div>
      <div>
        <img width="30" src="https://img.icons8.com/emoji/48/000000/star-emoji.png"/>
        <p>Tu puntaje total es: {puntajeTotal()}</p>
        <img width="30" src="https://img.icons8.com/emoji/48/000000/star-emoji.png"/>
      </div>

      {cargando ? <h1>Cargando...</h1> :
        misionesCompletadas.length === 0 ?
          <div>
            <p>No tenes misiones completadas</p> 
            <Link to="/misiones">Ver misiones disponibles </Link> 
          </div> :
          <div>
            <p>{misionesCompletadas.titulo}</p>
            <p>{misionesCompletadas.descripcion}</p>
            <p>{misionesCompletadas.puntaje}</p>
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