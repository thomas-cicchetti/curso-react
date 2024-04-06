import React from 'react'
import ItemListContainer from './ItemListContainer.jsx'
import '../estilos/cardContainerStyle.css'

function CardContainer() {
  return (
    <div className='structureContainer'>
        <ItemListContainer nombre="Oreja de Elefante" precio="$3.999"/>
        <ItemListContainer nombre="Begonia" precio="$7.999"/>
        <ItemListContainer nombre="Paleta de Pintor" precio="$2.499"/>
        <ItemListContainer nombre="Arbol de Jade" precio="$4.999"/>
    </div>
  )
}

export default CardContainer