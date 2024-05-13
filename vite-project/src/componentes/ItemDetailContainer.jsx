import React, { useContext } from 'react'
import Counter from './Counter'
import { context } from './Context'

function ItemDetailContainer(props) {

    const ContextValue = useContext(context)

    const handleConfirm = (acum) => {
        ContextValue.addToCart(acum, props.product)

    }

    return (
        <div className='prodDetailCont'>
            <div className="productCard">
                <div className="contentCard">
                    <div>
                        <img className='imgDetail' src={props.product.image} alt="Imagen del producto" width={500} height={500} />
                    </div>
                    <div className='detail'>
                        <div className='productTitle'>
                            {props.product.title}
                        </div>
                        <div className='productPrice'>
                            ${props.product.price}
                        </div>
                        <div className='productDescription'>
                            {props.product.description}
                        </div>
                    </div>
                </div>
            </div>

            <Counter handleConfirm={handleConfirm}/>

        </div>
    )
}

export default ItemDetailContainer