import { ItemDetail } from "./itemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { promesa } from "../ItemList/ApiSimulada"

export const ItemList = () => {
  const [cargando, setCargando] = useState(true)
  const [mision, setMision] = useState()

  const { misionID } = useParams()
  console.log(misionID)

  useEffect(() => {
    promesa().then(res => {
      if (misionID) {
        setMision(res.find(mision => mision.id === misionID))
      }
    })
      .catch(error => console.log(error))
      .finally(() => { setCargando(false) })
  }, [misionID])

  return (
    <div>
      {cargando ? <h1>Cargando...</h1> : <ItemDetail mision={mision} />}
    </div>
  )
}
