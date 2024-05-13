import React from 'react'

function ItemInCartDetail(props) {
    return (
        <div>
            <div>
                {props.name} - ${props.price} - Cantidad: {props.quantity}
            </div>
        </div>
            
    )
}

export default ItemInCartDetail