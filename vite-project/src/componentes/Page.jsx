import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import Productos from '../pages/Productos.jsx'
import Contacto from '../pages/Contacto.jsx'


function Page() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/home' element={<HomePage/>} />
                <Route path='/productos' element={<Productos/>} />
                <Route path='/contacto' element={<Contacto/>} />
            </Routes>
        </>
    )
}

export default Page