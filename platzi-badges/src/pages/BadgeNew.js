import React from 'react'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/platziconf-logo.svg';
import PageError from '../components/PageError';

import api from '../api';

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
    if(this.state.error){
      return(
        <PageError error={this.state.error.message}/>
      )
    }
    return(
      <React.Fragment>
        {/* Hero */}
        <div className="BadgeNew__hero">
          <img 
            className="BadgeNew_hero-image img-fluid" 
            src={header}
            alt="Logo"
          />
        </div>
        {/* Badge y form */}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First name"}
                lastName={this.state.form.lastName || "Last name"}
                twitter={this.state.form.twitter || "Twitter"}
                jobTitle={this.state.form.jobTitle || "Job title"}
                email={this.state.form.email || "Email"}
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
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

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading:true, error: null}) 
    console.log("submit");
    console.log(this.state);
    try{
      await api.badges.create(this.state.form);
      this.setState({loading: false});
    }catch(error){
      this.setState({loading: false, error});
      console.log(error.message);
    }
  }
}

export default BadgeNew;