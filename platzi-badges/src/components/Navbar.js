import React from 'react'
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'
import './styles/Navbar.css';

/*
    Este componente es una página, cuenta con:
        Barra con enlace de la conferencia
*/

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;