import React from 'react'
import ItemListContainer from './ItemListContainer.jsx'
import '../estilos/cardContainerStyle.css'

function CardContainer() {
  return (
    <div className='structureContainer'>
        <ItemListContainer nombre="Pantalón" precio="$25.000"/>
        <ItemListContainer nombre="Remera" precio="$19.000$"/>
        <ItemListContainer nombre="Camisa" precio="$29.000"/>
    </div>
  )
}

export default CardContainer