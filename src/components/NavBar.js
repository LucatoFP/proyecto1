import React from 'react'
import logo1 from '../assets/logo1.png'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className="BarraNav">
      <img src={logo1} alt="" width="50" height="50" />
      <ul className="ListaNav">
        <a href=" ">Inicio</a>
        <a href=" ">Productos</a>
        <a href=" ">Log In</a>
      </ul>
      <CartWidget Carrito={4}/>
    </div>
  )
}

export default NavBar;