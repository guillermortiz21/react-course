import React from 'react';
// Importamos imagen de la conferencia.
// WebPack logra poner la imagen dentro de una variable
import confLogo from '../images/badge-header.svg';
import Gravatar from '../components/Gravatar';

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
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Conf logo"
          />
          <h1>
            {this.props.firstName}<br/>{this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info"> {/* Div para Titulo y twitter*/}
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer"> {/* Div para el footer */}
          <p>#platziconf</p>
        </div>
      </div>
    )
  }
}

export default Badge;