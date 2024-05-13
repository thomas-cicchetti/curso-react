import React from 'react'
import '../estilos/err.css'

function Err() {
    return (
        <div>
            <div className="terminal-loader">
                <div className="terminal-header">
                    <div className="terminal-title">Status 404</div>
                    <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                    </div>
                </div>
                <div className="textCont">Error, página no encontrada</div>
            </div>
        </div>
    )
}

export default Err