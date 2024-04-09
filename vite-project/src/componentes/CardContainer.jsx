import React from 'react'
import ItemListContainer from './ItemListContainer.jsx'
import '../estilos/cardContainerStyle.css'
import oreja from '../imagenes/oreja.png'
import bamboo from '../imagenes/bamboo.png'
import cactus from '../imagenes/cactus.png'
import jade from '../imagenes/jade.png'

function CardContainer() {
  return (
    <div className='structureContainer'>
        <ItemListContainer nombre="Oreja de Elefante" precio="$3.999" image={oreja}/>
        <ItemListContainer nombre="Bamboo" precio="$7.999" image={bamboo}/>
        <ItemListContainer nombre="Cactus" precio="$2.499" image={cactus}/>
        <ItemListContainer nombre="Arbol de Jade" precio="$4.999" image={jade}/>
    </div>
  )
}

export default CardContainer