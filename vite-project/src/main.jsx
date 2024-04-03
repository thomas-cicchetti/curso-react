import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './componentes/NavBar.jsx'
import CardContainer from './componentes/CardContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <CardContainer/>
    
  </React.StrictMode>,
)
