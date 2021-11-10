import Boton from "../Boton/Boton"
import "./formulario.css"

export const Formulario = ({tituloForm , input1, placeholder1, input2, placeholder2, input3, placeholder3}) => {
    return (
      <div className="div-formulario">
        <h2 className="subtitulos">{tituloForm}</h2>
        <form className="formulario">

          <label for={input1} className="input">
            <p className="parrafos">{input1}</p>
            <input type="text" name={input1} required placeholder={placeholder1}/>
          </label>

          <label for={input2} className="input">
            <p className="parrafos">{input2}</p>
            <input type="text" name={input2} required placeholder={placeholder2}/>
          </label>

          <label for={input3} className="input">
            <p className="parrafos">{input3}</p>
            <input type="number" name={input3} required max="200" placeholder={placeholder3}/>
          </label>
          
        </form>
        <Boton texto="Agregar mision" /> 
      </div>
  )
}

export default Formulario
//{tituloForm}, {input1}, {input2}, {input3}