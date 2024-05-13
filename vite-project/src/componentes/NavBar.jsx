import React from 'react'
import "../estilos/navBarStyle.css"
import CartWidget from './CartWidget.jsx'
import { Link } from 'react-router-dom'


function NavBar() {
  return (

    <header className='nav'>
      <Link to='/home' className='img'><img src="https://i.postimg.cc/HxzHqM7Y/Sin-t-tulo-1.png" alt="logo" width={80} height={80} /></Link>
      <Link to='/home' className='title'><h1>ByteHub</h1></Link>
      <nav className='navigator'>
        <Link to='/home' ><button className='na'>Home</button></Link>
        <Link to='/products'><button className='na'>Productos</button></Link>
        <Link to='/contact' ><button className='na'>Contacto</button></Link>
        <Link to='/cart'><CartWidget /></Link>
      </nav>
    </header>
  )
}

export default NavBar 