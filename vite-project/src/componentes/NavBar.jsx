import React from 'react'
import "../estilos/navBarStyle.css"
import CartWidget from './CartWidget.jsx'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    
    <header className='nav'>
        <Link to='/home' className='img'><img src="https://i.postimg.cc/6p4Vd6Rf/logo.png" alt="logo" width={80} height={80}/></Link>
        <Link to='/home' className='title'><h1>Tech & Bytes</h1></Link>
        <nav className='navigator'>
          <Link to='/home' className='na'>Home</Link>
          <Link to='/products' className='na'>Productos</Link>
          <Link to='/contact' className='na'>Contacto</Link>
          <Link to='/cart' className='na'><CartWidget/></Link>
        </nav>
    </header>
  )
}       

export default NavBar 