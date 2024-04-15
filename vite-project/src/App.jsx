import React from 'react'
import NavBar from './componentes/NavBar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Page from './componentes/Page.jsx'
import Footer from './componentes/Footer.jsx'


function App() {
  

  return (
    <BrowserRouter>
      <NavBar/>
      <Page/>
      <Footer/>
      
    </BrowserRouter>
    
  )
}

export default App