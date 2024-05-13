import React, { useContext } from 'react'
import { context } from './Context'
import ItemInCartDetail from './ItemInCartDetail'

function CartDetailContainer() {

    const product = useContext(context)
    console.log(product)

    return (

        <div>
            <div>
                La cantidad total de articulos que estas llevando es de {product.cartQ}
            </div>

            <section>
                {console.log(product.cart)}
                {product.cart.map((item) => {
                    return <ItemInCartDetail key={item.id} name={item.title} price={item.price} quantity={item.cant} />
                })}
            </section>

            <div>
                El precio total es ${product.totalPrice}
            </div>

        </div>
    )
}

export default CartDetailContainer