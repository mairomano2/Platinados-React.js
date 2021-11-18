import { useState, useEffect } from "react"
import { useParams } from "react-router"
import {promesa} from "./ItemList/ApiSimulada"
import ItemList from "./ItemList/ItemList"
import NavBar from "./NavBarMisiones/NavBarMisiones";

import "./misiones.css"

function Misiones(){
  const [cargando, setCargando] = useState(true)
  const [mision, setMisiones] = useState([])

  const {categoriaID} = useParams()
  
  useEffect( () => {
    if(categoriaID){
      promesa
      .then(res => { 
        setMisiones(res.filter( mision => mision.categoria === categoriaID)) 
      })
      .catch(error => console.log(error))
      .finally( () => {setCargando(false)} )

    }else{
      promesa
      .then(res => { 
        setMisiones(res) 
      })
      .catch(error => console.log(error))
      .finally( () => {setCargando(false)} )
    }
  }, [categoriaID])

  console.log(categoriaID)
  
  return (
    <div className="hero">
      <NavBar />
      {cargando ? <h1>Cargando...</h1> : <ItemList misiones={mision}  key={mision.id}/>}
    </div>
  )
}
export default Misiones