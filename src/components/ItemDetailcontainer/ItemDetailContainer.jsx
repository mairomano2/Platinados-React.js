import { useEffect, useState } from "react"
import { ItemDetail } from "./itemDetail"
import { misiones } from "./misiones"

const getMisiones = () => new Promise((res, rej) => {
  setTimeout(() => {
    res(misiones)
  }, 2000);
})

export const ItemList = () => {
  const [cargando, setCargando] = useState(true)
  const [mision, setMision] = useState(null)

  useEffect(() => {

    getMisiones()
      .then(res => { setMision(res.find(mision => mision.id === 2)) })
      .catch(error => console.error(error))
      .finally(() => { setCargando(false) })
  }, [])

  return (
    <div>
      <h1>item detail container</h1>
      {cargando ? <h1>Cargando...</h1> : <ItemDetail mision={mision} key={mision.id}/>}
    </div>
  )
}
