import { Items } from "./Items"

export const ItemList = ({ misiones }) => {
  return misiones.map(mision => <Items key={mision.id} mision={mision} />)
}

export default ItemList