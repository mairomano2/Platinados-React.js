import sega from "../imagenes/sega.png"
import {Boton} from "./Boton/Boton"
import {ItemCount} from "./ItemCount/ItemCount"
import "./landing.css"

function Landing(){
  return (
    <div className="hero">
      <ItemCount valorInicial={1} stock={10}/>
      <img src={sega} className="heroImg" alt="joystick del sega" />
      <h1 className="titulo">Bienvenidxs a platinados</h1>
      <p className="subtitulos">Comenza a mejorar tu vida</p>
      <div className="contenedorBotones">
        <Boton className="parrafos" texto="Empezar" />
        <Boton className="parrafos" texto="Como jugar" />
      </div>
    </div>
  )
}
export default Landing
