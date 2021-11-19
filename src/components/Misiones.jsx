import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { promesa } from "./ItemList/ApiSimulada"
import ItemList from "./ItemList/ItemList"
import { NavBarMisiones } from "./NavBarMisiones/NavBarMisiones";

import "./misiones.css"

function Misiones() {
  const [cargando, setCargando] = useState(true)
  const [misiones, setMisiones] = useState([])

  const { categoriaID } = useParams()

  useEffect(() => {
    promesa().then(res => {
      if (categoriaID) {
        setMisiones(res.filter(mision => mision.categoria === categoriaID))
      } else {
        setMisiones(res)
      }
    })
      .catch(error => console.log(error))
      .finally(() => { setCargando(false) })
  }, [categoriaID])

  return (
    <div className="hero">
      <NavBarMisiones />
      {cargando ? <h1>Cargando...</h1> : <ItemList misiones={misiones} />}
    </div>
  )
}
export default Misiones