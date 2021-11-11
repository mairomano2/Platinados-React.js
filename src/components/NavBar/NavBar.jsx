import "./NavBar.css"

export const NavBar = () => {
  return (
    <div className="headerFondo">
      <img src="https://img.icons8.com/pastel-glyph/64/ffffff/home.png" className="navImg"/>
      <ul className="navUl">
        <li className="navLi parrafos"><a href="#" className="navA">Misiones</a></li>
        <li className="navLi parrafos"><a href="#" className="navA">Crear una misión</a></li>
        <li className="navLi parrafos"><a href="#" className="navA">Log in</a></li>
      </ul>
    </div>
  )
}

export default NavBar