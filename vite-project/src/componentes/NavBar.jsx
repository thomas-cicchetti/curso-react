import React from 'react'
import "../estilos/navBarStyle.css"
import CartWidget from './CartWidget.jsx'

function NavBar() {
  return (
    
    <header className='nav'>
        <h1 className='title'>
            Titulo
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