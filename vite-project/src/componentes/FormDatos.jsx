import React, { useContext, useState } from 'react'
import "../estilos/formDatosStyle.css"
import { context } from './Context';
import { createSale } from '../functions';

function FormDatos(props) {

    const venta = useContext(context)

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        textarea: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createSale(venta.cart, formData, venta.totalPrice)
        venta.buyConfirm()
    };


    return (
        <div>
            <div className="containerForm">
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullname">Nombre y Apellido</label>
                            <input required={true} name="fullname" id="fullname" type="text" value={formData.fullname} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo</label>
                            <input required={true} name="email" id="email" type="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono</label>
                            <input required={true} name="phone" id="phone" type="number" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="textarea">Mensaje o aclaraciones</label>
                            <textarea required={false} cols="50" rows="10" id="textarea" name="textarea" value={formData.textarea} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className="form-submit-btn">{props.button}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default FormDatos