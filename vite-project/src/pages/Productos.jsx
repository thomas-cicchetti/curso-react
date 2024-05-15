import React from 'react'
import CardContainer from '../componentes/CardContainer.jsx'
import BodyProducts from '../componentes/BodyProducts.jsx'
import '../estilos/productosStyle.css'
import Categories from '../componentes/Categories.jsx'
import { useParams } from 'react-router-dom'


function Productos() {

    const { category } = useParams()

    return (
        <>
            <BodyProducts />
            <div className='frontProducts'>
                <Categories />
                <CardContainer id={category} />
            </div>
        </>

    )
}

export default Productos