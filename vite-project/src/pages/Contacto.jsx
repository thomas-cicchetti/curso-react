import React from 'react'
import '../estilos/contactoStyle.css'
import FormDatos from '../componentes/FormDatos'

function Contacto() {
  return (
    <div>
      <div className='headearContacto'>
        <div className="pyramid-loader">
          <div className="wrapper">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
            <span className="shadow"></span>
          </div>
        </div>
        <div className='titleContact'>
          <h4>Completa el formulario y te contactaremos</h4>
        </div>
      </div>

      <FormDatos button="Enviar" />

    </div>
  )
}

export default Contacto