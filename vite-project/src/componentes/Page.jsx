import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import Productos from '../pages/Productos.jsx'
import Contacto from '../pages/Contacto.jsx'
import ProductDetail from './ItemDetailContainer.jsx'


function Page() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/home' element={<HomePage/>} />
                <Route path='/products' element={<Productos/>} />
                <Route path='/contact' element={<Contacto/>} />
                <Route path='/:id' element={<ProductDetail/>} />
            </Routes>
        </>
    )
}

export default Page