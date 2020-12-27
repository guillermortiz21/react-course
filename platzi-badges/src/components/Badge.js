import React from 'react';

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
            <h1>Badge</h1>
        )
    }
}

export default Badge;