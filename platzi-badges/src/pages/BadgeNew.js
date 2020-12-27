import React from 'react'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/badge-header.svg';

import './styles/BadgeNew.css';

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
                <div className="BadgeNew__hero">
                    <img 
                        className="img-fluid" 
                        src={header}
                        alt="Logo"
                    />
                </div>
                {/* Badge y form */}
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="Guillermo"
                                lastName="Ortiz"
                                twitter="guillermo"
                                jobTitle="Fullstack developer"
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;