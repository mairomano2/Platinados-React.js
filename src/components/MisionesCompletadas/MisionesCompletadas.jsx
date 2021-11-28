import { useContext } from "react"
import { MisionesContext, MisionesContextProvider } from "../Context/MisionesContext"

export function MisionesCompletadas() {
  const misiones = useContext(MisionesContext)

  return (
    <div>
      <h1>Misiones completadas</h1>
      <MisionesContextProvider>
        { misiones.misionesCompletadas.forEach((mision) => <div>
          <p>{mision.id}</p>
          <p>{mision.puntaje}</p>
        </div>)}
      </MisionesContextProvider>
      {/* <p>{puntaje}</p> */}
    </div>
  )
}

// TODO 
  // Cart.js 
  // Debe mostrar el desglose de tu carrito y el precio total.
  // Debe mostrar todos los ítems agregados agrupados.
  // Por cada tipo de ítem, incluye un control para eliminar ítems.
  // De no haber ítems muestra un mensaje, de manera condicional, diciendo que no hay ítems y un react-router Link o un botón para que pueda volver al Landing (ItemDetailContainer.js) para buscar y comprar algo.
  // CartWidget.js.
  // Ahora debe consumir el CartContext y mostrar en tiempo real (aparte del ícono) qué cantidad de ítems están agregados (2 camisas y 1 gorro equivaldrían a 3 items).
  // El cart widget no se debe mostrar más si no hay items en el carrito, aplicando la técnica que elijas (dismount, style, etc).
