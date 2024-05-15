import React from 'react'
import '../estilos/categoriesStyle.css'
import { Link } from 'react-router-dom'



function Categories() {

    const pro = 'procesadores'
    const vg = 'videoGraphics'
    const st = 'storage'

    return (
        <div className='containerCategories'>
            <h5>Categorias</h5>
            <ul>
                <Link to='/products' ><li>Todos los productos</li></Link>
                <Link to= {`/category/${pro}`} ><li>Procesadores</li></Link>
                <Link to= {`/category/${vg}`} ><li>Tarjetas Graficas</li></Link>
                <Link to= {`/category/${st}`} ><li>Almacenamiento</li></Link>


            </ul>
        </div>
    )
}

export default Categories