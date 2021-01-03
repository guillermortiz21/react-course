import React from 'react'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/platziconf-logo.svg';
import PageLoading from '../components/PageLoading';

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
  state = {
    loading: false,
    error: null,
    form: {
      firstName:"",
      lastName:"",
      email:"",
      jobTitle:"",
      twitter:"",
    }
  }

  render(){
    if(this.state.loading === true){
      return(
        <PageLoading/>
      );
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
                error={this.state.error}
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
    try{
      await api.badges.create(this.state.form);
      this.setState({loading: false});

      this.props.history.push('/badges');

    }catch(error){
      this.setState({loading: false, error});
    }
  }
}

export default BadgeNew;