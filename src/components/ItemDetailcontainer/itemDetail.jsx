import { Boton } from "../Boton/Boton"
import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export const ItemDetail = ({ mision }) => {
  const [clickeado, setClickeado] = useState(false)
  console.log(clickeado)

  const handleAdd = () => {
    setClickeado(true)
    console.log(clickeado)
  }

  return (
    <div>
      <p className="parrafos">{mision.categoria}</p>
      <p className="parrafos">{mision.titulo}</p>
      <p className="parrafos">{mision.descripcion}</p>
      <p className="parrafos">{mision.puntaje}</p>
      <Boton texto="Marcar como completada" />
      {clickeado ? (<Link to="/cart">Ir al carrito</Link>) : (<ItemCount valorInicial={1} stock={5} onAdd={handleAdd} />)}
    </div>
  )
}

