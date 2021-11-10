import {Items} from "./Items"
import promesa from "./ApiSimulada"


export const ItemList = ({misiones}) => {
  return (
      misiones.map(mision => <Items mision={mision} />
      )
  )
}
                      
export default ItemList