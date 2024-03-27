import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './componentes/NavBar.jsx'
import ItemListContainer from './componentes/ItemListContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <ItemListContainer nombre="Pantalón" precio="$25.000"/>
    <ItemListContainer nombre="Remera" precio="$19.000$"/>
    <ItemListContainer nombre="Camisa" precio="$29.000"/>
    
  </React.StrictMode>,
)
