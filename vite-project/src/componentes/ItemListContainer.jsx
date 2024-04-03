import React from 'react'
import "../estilos/itemListContainerStyle.css"
function ItemListContainer(props) {
  return (
    <div className='container'>
      <div className='description'>
      <h2>Articulo: {props.nombre}</h2>
      <p>{props.precio}</p>
      <button>+</button>
      <span>0</span>
      <button>-</button>
      </div>
      <div className='image'>
        <img src="https://ombudistribuidora.com.ar/wp-content/uploads/2016/03/remera.jpg" alt="remera" width={150} height={150} />
      </div>
    </div>
  )
}

export default ItemListContainer