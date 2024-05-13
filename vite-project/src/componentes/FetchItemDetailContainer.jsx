import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../estilos/fetchItemDetailContainerStyle.css'
import ItemDetailContainer from './ItemDetailContainer'



function ProductDetail() {

    const { id } = useParams()

    const [product, setProduct] = useState({})


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
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
            <ItemDetailContainer product={product}/>
        </div>
    )
}

export default ProductDetail


