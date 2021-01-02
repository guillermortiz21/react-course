import React from 'react'
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
    state = {form: {
        firstName:"",
        lastName:"",
        email:"",
        jobTitle:"",
        twitter:"",
    }}

    render(){
        return(
            <React.Fragment>
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
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange}
                            formValues={this.state.form}
                        />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form, // Agregar todos los valores que ya tenía
                [e.target.name]: e.target.value
            }
        });
    }
}

export default BadgeNew;