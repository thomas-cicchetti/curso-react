import React, { useContext, useState } from 'react'
import { context } from './Context'
import ItemInCartDetail from './ItemInCartDetail'
import "../estilos/cartDetailContainerStyle.css"
import { Link } from 'react-router-dom'
import FormDatos from './FormDatos'
import { createSale } from '../functions'

function CartDetailContainer() {

    const product = useContext(context)
    console.log(product)
    console.log(product.orderId)





    const mensajePantalla = () => {
        if (product.cartQ == 0) {
            return <h4 className='description'>Su carrito esta vacio, para agregar productos, 👉 <Link className='linkAqui' to='/products'>haga click aqui </Link>👈 </h4>
        } else {
            return <div>
                <section>
                    {product.cart.map((item) => {
                        return <ItemInCartDetail key={item.id} name={item.title} price={item.price} quantity={item.cant} image={item.image} id={item.id} />
                    })}
                </section>

                <div className='detailsOrder'>
                    <div className='description'>
                        Cantidad de articulos: {product.cartQ}
                    </div>
                    <div className='description'>
                        Valor total de la compra: ${product.totalPrice}
                    </div>
                    <div className='description'>
                        <button onClick={() => product.clearCart()} className="button1">
                            <svg viewBox="0 0 448 512" className="svgIcon1"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                        </button>
                    </div>

                </div>
            </div>

        }
    }

    const form = () => {
        if (product.cartQ !== 0) {
            return <div>

                <FormDatos button={"Finalizar compra"} />
            </div>

        }
    }

    const showId = () => {
        if (product.orderId !== undefined) {
            return <div className='orderId'>
                <h2>Su compra fue aprobada con exito bajo el siguiente ID: <br />{product.orderId}</h2>
            </div>
        }
    }


    return (

        <div className='containerCartDetail'>
            <h4>
                Carrito de compras
            </h4>

            <div className='cartContainer'>
                {mensajePantalla()}
                {form()}
                


            </div>
            {showId()}
        </div>






    )
}

export default CartDetailContainer