import React from 'react'
import "../estilos/cartWidgetStyle.css"
import { useContext } from 'react'
import { context } from './Context.jsx'


function CartWidget() {

  const cart = useContext(context)

  return (

    <button className="btn-cart">
      <span>
        <img src="https://i.postimg.cc/h400f1mD/carrito.png" alt="carrito" width={30} />
        <p className='quantity'>{cart.cartQ}</p>
      </span>
    </button>
  )
}

export default CartWidget