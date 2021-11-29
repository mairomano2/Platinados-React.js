import { useContext, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { MisionesContext, MisionesContextProvider } from "../Context/MisionesContext"

export const ItemDetail = ({ mision }) => {
  const m = useContext(MisionesContext);
  const [clickeado, setClickeado] = useState(false)

  const handleAdd = (mision, cantidad) => {
    mision.cantidad = cantidad;
    m.misionesCompletadas = [...m.misionesCompletadas, mision];
    setClickeado(true);
  }

  return (
    <div>
      <p className="parrafos">{mision.categoria}</p>
      <p className="parrafos">{mision.titulo}</p>
      <p className="parrafos">{mision.descripcion}</p>
      <p className="parrafos">{mision.puntaje}</p>
      {clickeado ? (<Link to="/misionesCompletadas">Ver misiones completadas</Link>) : (<ItemCount valorInicial={1} stock={5} onAdd={handleAdd} mision={mision}/>)}
    </div>
  )
}

