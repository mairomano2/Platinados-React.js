import { useState, useEffect } from "react"
import { getFirestore } from "../service/getFirestore";
import { useParams } from "react-router"
import ItemList from "./ItemList/ItemList"
import { NavBarMisiones } from "./NavBarMisiones/NavBarMisiones";
import "./misiones.css"

export function Misiones() {
  const [cargando, setCargando] = useState(true)
  const [misiones, setMisiones] = useState([])

  const { categoriaID } = useParams()

  useEffect(() => {
    const dbQuery = getFirestore()
    if (categoriaID) {
      dbQuery.collection("misiones").where("categoria", "==", categoriaID).get()
        .then(data => setMisiones(data.docs.map(mision => ({ id: mision.id, ...mision.data() }))))
        .catch(error => console.log(error))
        .finally(() => { setCargando(false) })
    } else {

      dbQuery.collection("misiones").get()
        .then(data => setMisiones(data.docs.map(mision => ({ id: mision.id, ...mision.data() }))))
        .catch(error => console.log(error))
        .finally(() => { setCargando(false) })
    }
  }, [categoriaID])

  return (
    <div className="div-general">
      <h1 className="titulo">Misiones disponibles</h1>
      <NavBarMisiones />
      {cargando ? <h1 className="subtitulos cargando">Cargando...</h1> : <ItemList misiones={misiones} />}
    </div>
  )
}

export default Misiones