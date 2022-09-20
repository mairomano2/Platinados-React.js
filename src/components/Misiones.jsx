import { useContext } from "react";
import { MisionesContext } from "./Context/MisionesContext";
import { useParams } from "react-router";
import ItemList from "./ItemList/ItemList";
import { NavBarMisiones } from "./NavBarMisiones/NavBarMisiones";
import "./misiones.css";

export function Misiones() {
  const { setMisionesCompletadas, misiones, setMisiones } =
    useContext(MisionesContext);

  const completarMision = (mision) => {
    setMisionesCompletadas((prevMisionesCompletadas) => [
      ...prevMisionesCompletadas,
      mision,
    ]);

    const misionCompletada = misiones.find((item) => item.id === mision.id);
    setMisiones((prevMisiones) =>
      prevMisiones.filter((mision) => mision !== misionCompletada)
    );
  };

  const { categoriaID } = useParams();

  return (
    <div className="div-general">
      <h1 className="titulo">Misiones disponibles</h1>
      <NavBarMisiones />
      <ItemList
        completarMision={completarMision}
        misiones={
          categoriaID
            ? misiones.filter(
                (mision) => mision.categoria.toLocaleLowerCase() === categoriaID
              )
            : misiones
        }
      />
    </div>
  );
}

export default Misiones;
