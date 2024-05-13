import React, { useEffect, useState } from 'react'
import ItemListContainer from './ItemListContainer.jsx'
import '../estilos/cardContainerStyle.css'


function CardContainer() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
    .then((data)=>{
      return data.json()
    })
    .then((data)=>{
      console.log(data)
      setProduct(data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])
  
  


  return (
    
    <section className='structureContainer' >
      {product.map((item) => {
        return <ItemListContainer key = {item.id} product = {item}/>
      })}
    </section>

  )
}

export default CardContainer