import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import Productos from '../pages/Productos.jsx'
import Contacto from '../pages/Contacto.jsx'
import ProductDetail from './ItemDetailContainer.jsx'
import Err from './Err.jsx'

function Page() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/home' element={<HomePage/>} />
                <Route path='/products' element={<Productos/>} />
                <Route path='/contact' element={<Contacto/>} />
                <Route path='/products/:id' element={<ProductDetail/>} />
                <Route path='*' element={<Err/>} />
            </Routes>
        </>
    )
}

export default Page