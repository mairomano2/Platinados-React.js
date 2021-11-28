import { useState, createContext, useContext } from "react"

export const MisionesContext = createContext()

export const useMisionesContext = () => useContext(MisionesContext)

export const MisionesContextProvider = ({ children }) => {

  const [misionesCompletadas, setMisionesCompletadas] = useState([{ id: 1 }, { id: 2 }, { id: 3 }])

  // TODO cambiar el nombre del parametro mision por nuevaMision
  const agregarMision = (mision, cantidad = 1) => {

    setMisionesCompletadas((misionesAnteriores) => {
      const completada = misionesAnteriores.some((misionAnterior => misionAnterior.id === mision.id))
      // const completada = misionesAnteriores.some((({id}) => id === mision.id))
      if (completada) {
        return misionesAnteriores.map(misionAnterior => {
          if (misionAnterior.id === mision.id) {
            return { ...mision, cantidad: misionAnterior.cantidad + cantidad }
          } else {
            return misionAnterior
          }
        })
      } else {
        return [...misionesAnteriores, { ...mision, cantidad }]
      }
    })
  }

  const borrarMision = id => {
    setMisionesCompletadas((misionesAnteriores) => misionesAnteriores.filter(mision => mision.id !== id))
  }

  const limpiarCarrito = () => {
    setMisionesCompletadas([])
  }

  console.log(misionesCompletadas)

  const value = { misionesCompletadas, agregarMision, borrarMision, limpiarCarrito }

  return (
    <MisionesContext.Provider value={value}>
      <button onClick={() => agregarMision({ id: 4 }, 2)}>Agregar item</button>
      <button onClick={() => borrarMision(1)}>borrar item</button>
      <button onClick={limpiarCarrito}>limpiar carrito</button>
    </MisionesContext.Provider>
  )
}