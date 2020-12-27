import React from 'react'
import Navbar from '../components/Navbar';

/*
    Este componente es una página, cuenta con:
        Nav bar
        hero
        badge
        formulario
*/

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                {/* Nav bar */}
                <Navbar/>
                {/* Hero */}
                <div></div>
                {/* Badge */}
                <div></div>
                {/* Formulario */}
                <div></div>
            </div>
        )
    }
}

export default BadgeNew;