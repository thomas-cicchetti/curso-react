import React from 'react'
import NavBar from './componentes/NavBar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Page from './componentes/Page.jsx'
import Footer from './componentes/Footer.jsx'
import CartProvider from './componentes/Context.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Page />
      </CartProvider>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce
        />
    </BrowserRouter>

  )
}

export default App