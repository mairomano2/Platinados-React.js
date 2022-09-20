import { useState, createContext } from "react";
import { listaMisiones } from "./listaMisiones";

export const MisionesContext = createContext();

export const MisionesContextProvider = ({ children }) => {
  const [misiones, setMisiones] = useState(listaMisiones);
  const [misionesCompletadas, setMisionesCompletadas] = useState([]);

  const puntajeTotal = misionesCompletadas.reduce(
    (acum, valor) => acum + valor.puntaje,
    0
  );

  const value = {
    misiones,
    setMisiones,
    misionesCompletadas,
    setMisionesCompletadas,
    puntajeTotal,
  };

  return (
    <MisionesContext.Provider value={value}>
      {children}
    </MisionesContext.Provider>
  );
};
