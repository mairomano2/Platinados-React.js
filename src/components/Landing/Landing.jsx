import { Link } from "react-router-dom"
import Imagen from "../Imagenes/sega.png"
import "./landing.css"

export function Landing(){
  return(
    <div className="hero">
      <img className="hero-img" src={Imagen} />
      <h1 className="titulo" id="h1">Bienvenidx a platinados</h1>
      <h2 className="subtitulos">Comenza a mejorar tu vida</h2>
      <div  className="botones">
        <Link to="/misiones">
          <button className="boton-personalizado">Comenzar</button>
        </Link>
        <Link to="/comoJugar">
          <button className="boton-personalizado">Cómo jugar</button>
        </Link>
      </div>
    </div>
  )
}