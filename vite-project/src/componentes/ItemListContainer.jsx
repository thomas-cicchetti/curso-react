import React, { useContext } from 'react'
import "../estilos/itemListContainerStyle.css"
import { Link } from 'react-router-dom'
import Counter from './Counter'
import { context } from './Context'

function ItemListContainer(props) {

  const { product } = props

  const ContextValue = useContext(context)

  const handleConfirm = (acum) => {
      ContextValue.addToCart(acum, props.product, props.product.id)
      }

  return (

    <div className='itemBox'>
      <div className="card">

        <Link to={`/products/${props.product.id}`}><div className="card__img"><img src={props.product.image} alt="image" width={250} height={250} className='image' /></div></Link>
        <div className="card__title">{props.product.title}</div>
        <div className="card__price">${props.product.price}</div>
        <div className="card__wrapper"></div>
        <Counter handleConfirm={handleConfirm}/>
      </div>
    </div>
  )
}

export default ItemListContainer