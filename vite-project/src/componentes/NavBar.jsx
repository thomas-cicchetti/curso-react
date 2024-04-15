import React from 'react'
import "../estilos/navBarStyle.css"
import CartWidget from './CartWidget.jsx'
import { Link, NavLink } from 'react-router-dom'


function NavBar() {
  return (
    
    <header className='nav'>
        <img src="https://i.postimg.cc/6p4Vd6Rf/logo.png" alt="logo" width={80} height={80} className='img'/>
        <h1 className='title'>
            Raices & Bytes
        </h1>
        <nav className='navigator'>
          <Link to='/home'>Home</Link>
          <Link to='/productos'>Productos</Link>
          <Link to='/contacto'>Contacto</Link>
          <Link to='/cart'><CartWidget/></Link>
        </nav>
    </header>
  )
}       

export default NavBar 