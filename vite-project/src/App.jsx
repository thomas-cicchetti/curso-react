import React from 'react'
import NavBar from './componentes/NavBar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Page from './componentes/Page.jsx'
import Footer from './componentes/Footer.jsx'
import CartProvider from './componentes/Context.jsx'


function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Page />
      </CartProvider>
      <Footer />
    </BrowserRouter>

  )
}

export default App