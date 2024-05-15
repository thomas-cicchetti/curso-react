import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../estilos/fetchItemDetailContainerStyle.css'
import ItemDetailContainer from './ItemDetailContainer'
import { getProductDetail } from '../functions'



function ProductDetail() {

    const { id } = useParams()

    const [product, setProduct] = useState({})


    useEffect(() => {

        getProductDetail(id)
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


