import React from 'react'
import logocarrito from '../assets/logocarrito.png'

const CartWidget = ({ Carrito }) => {
  return (
    <div className='Carrito'>
        <a href=" "><img src={logocarrito} alt="" width="35" height="35" style={{ paddingRight: "10px" }} /></a>
        <p>{Carrito}</p>
    </div>
  )
}

export default CartWidget