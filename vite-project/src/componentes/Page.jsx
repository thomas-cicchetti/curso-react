import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import Productos from '../pages/Productos.jsx'
import Contacto from '../pages/Contacto.jsx'
import ProductDetail from './FetchItemDetailContainer.jsx'
import Err from './Err.jsx'
import Carrito from '../pages/Carrito.jsx'

function Page() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/home' element={<HomePage/>} />
                <Route path='/products' element={<Productos/>} />
                <Route path='/contact' element={<Contacto/>} />
                <Route path='/cart' element={<Carrito/>} />
                <Route path='/products/:id' element={<ProductDetail/>} />
                <Route path='*' element={<Err/>} />
                <Route path='/category/:category' element={<Productos/>} />
            </Routes>
        </>
    )
}

export default Page