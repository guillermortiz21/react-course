import React from 'react';
// Importamos imagen de la conferencia.
// WebPack logra poner la imagen dentro de una variable
import confLogo from '../images/badge-header.svg';

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
            <div>
                <div> {/* Div para el header */}
                    {/* Source recibe el confLogo */}
                    <img src={confLogo} alt="Logo conferencia"/>
                </div>
                <div> {/* Div para el Nombre */}
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                    <h1>Guillermo<br/>Ortiz</h1>
                </div>
                <div> {/* Div para Titulo y twitter*/}
                    <p>Fullstack developer</p>
                    <p>@guillermo</p>
                </div>
                <div> {/* Div para el footer */}
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;