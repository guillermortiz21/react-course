import React from 'react';
// Importamos imagen de la conferencia.
// WebPack logra poner la imagen dentro de una variable
import confLogo from '../images/badge-header.svg';

// Importamos estilos
import "./styles/Badge.css";

/*
    Cada badge tiene:
        Header
        Nombre participante
        Título
        Twitter
        Footer
*/

// Los componentes son clases que heredan
// de React.Component.

class Badge extends React.Component{
    // Un método obligatorio, el render
    render(){
        return(
            <div className="Badge">
                <div className="Badge__header"> {/* Div para el header */}
                    {/* Source recibe el confLogo */}
                    <img src={confLogo} alt="Logo conferencia"/>
                </div>
                <div className="Badge__section-name"> {/* Div para el Nombre */}
                    <img
                        className="Badge__avatar"
                        src="https://www.gravatar.com/avatar?d=identicon" 
                        alt="Avatar"
                    />
                    <h1>Guillermo<br/>Ortiz</h1>
                </div>
                <div className="Badge__section-info"> {/* Div para Titulo y twitter*/}
                    <h3>Fullstack developer</h3>
                    <div>@guillermo</div>
                </div>
                <div className="Badge__footer"> {/* Div para el footer */}
                    <p>#platziconf</p>
                </div>
            </div>
        )
    }
}

export default Badge;