import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


function ProductDetail() {

    const {id} = useParams()

    const [product, setProduct]  = useState({}) 

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
        <div>
            <h2>El producto es {product.title}</h2>
            <img src={product.images} alt="image" width={300}/>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetail