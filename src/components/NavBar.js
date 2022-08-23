import logo1 from "../assets/logo1.png"

const NavBar = () => {
  return (
    <div className="BarraNav">
      <img src={logo1} alt="" width="50" height="50" padding="15" />
      <ul className="ListaNav">
        <a href=" ">Inicio</a>
        <a href=" ">Productos</a>
        <a href=" ">Log In</a>
      </ul>
    </div>
  )
}

export default NavBar;