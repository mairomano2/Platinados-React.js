import {Items} from "./Items"

export const ItemList = ({misiones}) => {
  return (
      misiones.map(mision => <Items mision={mision} key={mision.id}/>
      )
  )
}

export default ItemList