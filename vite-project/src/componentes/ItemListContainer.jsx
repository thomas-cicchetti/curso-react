import React from 'react'
import "../estilos/itemListContainerStyle.css"
function ItemListContainer(props) {
  return (
    <div className='container'>
      <h2>Articulo: {props.nombre}</h2>
      <p>Precio: {props.precio}</p>
    </div>
  )
}

export default ItemListContainer