import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export const ItemDetail = ({ mision }) => {
  const [clickeado, setClickeado] = useState(false)
  console.log(clickeado)

  const handleAdd = () => {
    setClickeado(true)
  }

  return (
    <div>
      <p className="parrafos">{mision.categoria}</p>
      <p className="parrafos">{mision.titulo}</p>
      <p className="parrafos">{mision.descripcion}</p>
      <p className="parrafos">{mision.puntaje}</p>
      {clickeado ? (<Link to="/misionesCompletadas">Ver misiones completadas</Link>) : (<ItemCount valorInicial={1} stock={5} onAdd={handleAdd} />)}
    </div>
  )
}

