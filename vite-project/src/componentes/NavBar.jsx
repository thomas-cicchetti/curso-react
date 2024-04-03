import React from 'react'
import "../estilos/navBarStyle.css"
import CartWidget from './CartWidget.jsx'

function NavBar() {
  return (
    
    <header className='nav'>
        <img src="https://i.postimg.cc/6p4Vd6Rf/logo.png" alt="logo" width={80} height={80} className='img' />
        <h1 className='title'>
            Raices & Bytes
        </h1>
        <nav className='navigator'>
            <a href="">Home</a>
            <a href="">Productos</a>
            <a href="">Contacto</a>
            <a href=""><CartWidget/></a>
        </nav>
    </header>
  )
}       

export default NavBar