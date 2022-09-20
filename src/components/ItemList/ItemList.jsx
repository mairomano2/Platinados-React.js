export const ItemList = ({ misiones, completarMision }) => {
  return misiones.map((mision) => {
    return (
      <div key={mision.id} className="contenedor-decorado misiones">
        <p className="parrafos">Titulo: {mision.titulo}</p>
        <p className="parrafos">Categoría: {mision.categoria}</p>
        <p className="parrafos">{mision.descripcion}</p>
        <p className="parrafos">Puntaje: {mision.puntaje}</p>
        <button
          onClick={() => completarMision(mision)}
          className="contenedor-decorado boton-hero"
        >
          Completar!
        </button>
      </div>
    );
  });
};

export default ItemList;
