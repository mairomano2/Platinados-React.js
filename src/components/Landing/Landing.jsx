import { Link } from "react-router-dom"
import Imagen from "../Imagenes/sega.png"
import "./landing.css"

export function Landing(){
  return(
    <div className="div-general hero">
      <img className="hero-img" src={Imagen} />
      <h1 className="titulo" id="h1">Bienvenidx a platinados</h1>
      <h2 className="subtitulos">Comenza a mejorar tu vida</h2>
      <div  className="botones-hero">
        <Link to="/misiones">
          <button className="contenedor-decorado boton-hero">Comenzar</button>
        </Link>
        <Link to="/comoJugar">
          <button className="contenedor-decorado boton-hero">Cómo jugar</button>
        </Link>
      </div>
    </div>
  )
}