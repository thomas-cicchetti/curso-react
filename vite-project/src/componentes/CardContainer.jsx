import React, { useEffect, useState } from 'react'
import ItemListContainer from './ItemListContainer.jsx'
import '../estilos/cardContainerStyle.css'
import { getProducts, getProductsByCategory } from '../functions.js'




function CardContainer(props) {

  const [product, setProduct] = useState([]);

  const id = props.id

  useEffect(() => {
    if (id) {
      getProductsByCategory(id)
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getProducts()
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);


  return (

    <section className='structureContainer' >
      {product.map((item) => {
        return <ItemListContainer key={item.id} product={item} />
      })}
    </section>

  )
}

export default CardContainer