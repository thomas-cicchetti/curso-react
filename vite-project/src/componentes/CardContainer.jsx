import React from 'react'
import ItemListContainer from './ItemListContainer.jsx'
import '../estilos/cardContainerStyle.css'

function CardContainer() {
  return (
    <div className='structureContainer'>
        <ItemListContainer nombre="Oreja de Elefante" precio="$5.000"/>
        <ItemListContainer nombre="Begonia" precio="$8.000"/>
        <ItemListContainer nombre="Paleta de Pintor" precio="$2.500"/>
    </div>
  )
}

export default CardContainer