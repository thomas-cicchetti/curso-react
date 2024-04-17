import React from 'react'
import '../estilos/err.css'

function Err() {
    return (
        <div>
            <div class="terminal-loader">
                <div class="terminal-header">
                    <div class="terminal-title">Status 404</div>
                    <div class="terminal-controls">
                        <div class="control close"></div>
                        <div class="control minimize"></div>
                        <div class="control maximize"></div>
                    </div>
                </div>
                <div class="textCont">Error, página no encontrada</div>
            </div>
        </div>
    )
}

export default Err