import React from 'react'
import '../estilos/contactoStyle.css'

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

      <div>
        <div className="containerForm">
          <div className="form-container">
            <form className="form">
              <div className="form-group">
                <label htmlFor="fullname">Nombre y Apellido</label>
                <input required={true} name="email" id="fullname" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo</label>
                <input required={true} name="email" id="email" type="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input required={true} name="email" id="phone" type="number" />
              </div>
              <div className="form-group">
                <label htmlFor="textarea">Mensaje</label>
                <textarea required={true} cols="50" rows="10" id="textarea" name="textarea"></textarea>
              </div>
              <button type="submit" className="form-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto