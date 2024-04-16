import React, { useEffect, useState } from 'react'
import ItemListContainer from './ItemListContainer.jsx'
import '../estilos/cardContainerStyle.css'


function CardContainer() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories/2/products')
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
        return <ItemListContainer id={item.id} nombre={item.title} precio={item.price} image={item.images[0]}/>
      })}
    </section>

  )
}

export default CardContainer