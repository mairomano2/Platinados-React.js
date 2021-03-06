import React, { useState } from "react"
import "./ItemCount.css"

export const ItemCount = ({ valorInicial, stock, onAdd, mision }) => {
  const [contador, setContador] = useState(valorInicial)

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : alert("No hay mas stock")
  }

  const restar = () => {
    contador > valorInicial ? setContador(contador - 1) : alert("Elija otra cantidad de productos")
  }

  return (
    <div className="contador">
      <button onClick={sumar}>+</button>
      <label>Numero: {contador}</label>
      <button onClick={restar}>-</button>
      <button onClick={()=> onAdd(mision, contador)} type="button">Marcar como completada</button>
    </div>
  )
}

export default ItemCount