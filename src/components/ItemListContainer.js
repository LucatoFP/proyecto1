import React from 'react'

const ItemListContainer = ({ productos }) => {
  return (
    <div className="ListaProductos">
      <p>¡Bienvenido! Mira nuestra lista de productos: {productos}</p>
    </div>
  )
}

export default ItemListContainer