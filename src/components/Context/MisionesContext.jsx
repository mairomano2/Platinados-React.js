import { useState, createContext} from "react"
import {MisionesCompletadas} from "../MisionesCompletadas/MisionesCompletadas"

export const MisionesContext = createContext()

// export const useMisionesContext = () => useContext(MisionesContext)

export const MisionesContextProvider = ({ children }) => {

  const [misionesCompletadas, setMisionesCompletadas] = useState([{ id: 1, puntaje:100 }, { id: 2, puntaje:100 }, { id: 3, puntaje:100 }])

  // TODO cambiar el nombre del parametro mision por nuevaMision
  const agregarMision = (nuevaMision, cantidad = 1) => {

    setMisionesCompletadas((misionesAnteriores) => {
      const completada = misionesAnteriores.some((misionAnterior => misionAnterior.id === nuevaMision.id))
      // const completada = misionesAnteriores.some((({id}) => id === nuevaMision.id))
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
      <button onClick={() => agregarMision({ id: 4, puntaje:100 }, 2)}>Agregar item</button>
      <button onClick={() => borrarMision(1)}>borrar item</button>
      <button onClick={limpiarCarrito}>limpiar carrito</button>
    </MisionesContext.Provider>
  )
}