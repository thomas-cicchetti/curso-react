import React from 'react'
import "../estilos/cartWidgetStyle.css"


function CartWidget() {
  return (

    <button data-quantity="20" className="btn-cart">
        <img src="https://i.postimg.cc/h400f1mD/carrito.png" alt="carrito" width={30} />
        <p className='quantity'>20</p>
    </button>
  )
}

export default CartWidget