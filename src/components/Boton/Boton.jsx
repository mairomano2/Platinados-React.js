import './boton.css'

export const Boton = (props) => {
  const {texto} = props

  return (
    <button className="botonPersonalizado parrafos">{texto}</button>
  )
}