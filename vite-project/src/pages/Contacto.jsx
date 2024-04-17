import React from 'react'
import '../estilos/contactoStyle.css'

function Contacto() {
  return (
    <div class="containerForm">
      <div class="form-container">
        <form class="form">
          <div class="form-group">
            <label for="fullname">Nombre y Apellido</label>
            <input required="true" name="email" id="fullname" type="text" />
          </div>
          <div class="form-group">
            <label for="email">Correo</label>
            <input required="true" name="email" id="email" type="email" />
          </div>
          <div class="form-group">
            <label for="phone">Teléfono</label>
            <input required="true" name="email" id="phone" type="number"  />
          </div>
          <div class="form-group">
            <label for="textarea">Mensaje</label>
            <textarea required="true" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
          </div>
          <button type="submit" class="form-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contacto