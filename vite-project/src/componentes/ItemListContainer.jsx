import React from 'react'
import { useState } from 'react'

import "../estilos/itemListContainerStyle.css"
function ItemListContainer(props) {

  const counter = useState(0)
  const acum = counter[0]
  const setAcum = counter[1]

  const cartCounter = useState(0)
  const cart = cartCounter[0]
  const setCart = cartCounter[1]




  return (

    <div>
      <div className="card">
        <div className="card__img"><img src={props.image} alt="image" width={250} height={250} /></div>
        <div className="card__title">{props.nombre}</div>
        <div className="card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
        <div className="card__price">${props.precio} USD</div>
        <div className="card__wrapper">
          <div>
            <button className="CartBtn" onClick={() => acum === 0 ? alert("Por favor, selecciona la cantidad que deseas añadir") : setCart(cart + acum) && console.log(cart)}>

              <span className="IconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
              </span>
              <p className="text">Agregar al carrito</p>
            </button>

          </div>
          <div className="card__counter">
            <button className="pushable" onClick={() => acum > 0 ? setAcum(acum - 1) : setAcum(0)}>
              <span className="front">
                -
              </span>
            </button>
            <div className="card__counter-score">{acum}</div>
            <button className="pushable" onClick={() => setAcum(acum + 1)}>
              <span className="front">
                +
              </span>
            </button>

          </div>
        </div>
        <div className="vmCont">
          <button className='vm'>
            <p className='textvm'>Ver más</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer