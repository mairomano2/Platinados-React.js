import { useState, createContext, useEffect } from "react"
import { getFirestore } from "../../service/getFirestore";

export const MisionesContext = createContext()

export const MisionesContextProvider = ({ children }) => {

  const [misionesCompletadas, setMisionesCompletadas] = useState([])
  const [cargando, setCargando] = useState(true)

  const puntajeTotal = misionesCompletadas.reduce((acum, valor) => (acum + valor.puntaje), 0)

  useEffect(() => {
    const dbQuery = getFirestore()
    dbQuery.collection("misionesGuardadas").get()
      .then(data => setMisionesCompletadas(data.docs.map(mision => ({ id: mision.id, ...mision.data() }))))
      // .then(data => setMisionesCompletadas(data.docs.map(mision => ({ id: mision.id, ...mision.data().misiones[0] }))))
      .catch(error => console.error(error))
      .finally(() => { setCargando(false) })
  }, [])

  const value = { misionesCompletadas, cargando, puntajeTotal }
  console.log(misionesCompletadas)

  return (
    <MisionesContext.Provider value={value}>
      {children}
    </MisionesContext.Provider>
  )
}