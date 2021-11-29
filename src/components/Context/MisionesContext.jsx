import { useState, useContext, createContext} from "react"
import { MisionesCompletadas } from "../MisionesCompletadas/MisionesCompletadas"

export const MisionesContext = createContext({ misionesCompletadas : [] })

let ultimoID = 0;

export const MisionesContextProvider = () => {

  const m = useContext(MisionesContext);
  const [misionesCompletadas, setMisionesCompletadas] = useState(m.misionesCompletadas)

  const agregarMision = (nuevaMision, cantidad = 1) => {

    setMisionesCompletadas((misionesAnteriores) => {
      const completada = misionesAnteriores.some((misionAnterior => misionAnterior.id === nuevaMision.id))
      if (completada) {
        return misionesAnteriores.map(misionAnterior => {
          if (misionAnterior.id === nuevaMision.id) {
            return { ...nuevaMision, cantidad: misionAnterior.cantidad + cantidad }
          } else {
            return misionAnterior
          }
        })
      } else {
        return [...misionesAnteriores, { ...nuevaMision, cantidad }]
      }
    })
    ultimoID++;
  }

  const borrarMision = id => {
    setMisionesCompletadas((misionesAnteriores) => misionesAnteriores.filter(mision => mision.id !== id))
  }

  const limpiarCarrito = () => {
    setMisionesCompletadas([])
  }

  const value = { misionesCompletadas, agregarMision, borrarMision, limpiarCarrito }

  return (
    <MisionesContext.Provider value={value}>
      <MisionesCompletadas />
      <button onClick={limpiarCarrito}>limpiar carrito</button>
    </MisionesContext.Provider>
  )
}