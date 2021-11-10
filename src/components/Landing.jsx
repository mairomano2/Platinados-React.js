import { useState, useEffect } from "react"
// import sega from "../imagenes/sega.png"
// import {Boton} from "./Boton/Boton"
// import {Formulario} from "./Formulario/Formulario"
import {promesa} from "./ItemList/ApiSimulada"
import ItemList from "./ItemList/ItemList"
import "./landing.css"


function Landing(){
  const [mision, setMisiones] = useState([])
  const [cargando, setCargando] = useState(true)
  
  useEffect( () => {
    promesa
    .then(res => { setMisiones(res) })
    .catch(error => console.log(error))
    .finally( () => {setCargando(false)} )
  },[])

  console.log(mision)
  
  return (
    <div className="hero">
      {cargando ? <h1>Cargando...</h1> : <ItemList misiones={mision}/>}
      {/* <img src={sega} className="heroImg" alt="joystick del sega" />
      <h1 className="titulo">Bienvenidxs a platinados</h1>
      <p className="subtitulos">Comenza a mejorar tu vida</p>
      <div className="contenedorBotones">
        <Boton className="parrafos" texto="Empezar" />
        <Boton className="parrafos" texto="Como jugar" />
      </div>
      <h2  className="titulo">Registrate</h2>
      < Formulario tituloForm="ingresa tus datos" input1="usuario" placeholder1="Ingrese su usuario" input2="mail" placeholder2="Ingrese su mail" input3="contraseña" placeholder3="ingrese su contraseña"/> */}
    </div>
  )
}
export default Landing

