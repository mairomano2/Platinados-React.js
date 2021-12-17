import { useState, useEffect } from "react"
import { useParams } from "react-router";
import { getFirestore } from "../../service/getFirestore";
import { ItemDetail } from "./itemDetail"

export const ItemList = () => {
  const [cargando, setCargando] = useState(true)
  const [mision, setMision] = useState()
  const { misionID } = useParams()

  useEffect(() => {
    const dbQuery = getFirestore()
    dbQuery.collection("misiones").doc(misionID).get()
      .then(res => setMision({ id: res.id, ...res.data() }))
      .catch(error => console.log(error))
      .finally(() => setCargando(false))
  }, [misionID])

  return (
    <div>
      {cargando ? <h1 className="subtitulos">Cargando...</h1> : <ItemDetail mision={mision} />}
    </div>
  )
}
