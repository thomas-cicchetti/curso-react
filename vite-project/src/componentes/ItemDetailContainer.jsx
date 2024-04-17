import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../estilos/itemDetailContainerStyle.css'


function ProductDetail() {

    const { id } = useParams()

    const [product, setProduct] = useState({})

    const counter = useState(0)
    const acum = counter[0]
    const setAcum = counter[1]
  
    const cartCounter = useState(0)
    const cartTotalProducts = cartCounter[0]
    const setCartTotalProducts = cartCounter[1]
    console.log(cartTotalProducts)

    console.log(product)

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                setProduct(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className='prodDetailCont'>
            <div className="productCard">
                <div className="contentCard">
                    <div>
                        <img className='imgDetail' src={product.images} alt="Imagen del producto" width={500} height={500} />
                    </div>
                    <div className='detail'>
                        <div className='productTitle'>
                            {product.title}
                        </div>
                        <div className='productPrice'>
                            ${product.price}
                        </div>
                        <div className='productDescription'>
                            {product.description}
                        </div>
                    </div>
                </div>
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

    )
}

export default ProductDetail


