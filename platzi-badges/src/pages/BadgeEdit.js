import React from 'react'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/platziconf-logo.svg';
import PageLoading from '../components/PageLoading';

import api from '../api';

import './styles/BadgeEdit.css';

/*
  Este componente es una página, cuenta con:
    Nav bar
    hero
    badge
    formulario
*/

class BadgeEdit extends React.Component{
  state = {
    loading: true,
    error: null,
    form: {
      firstName:"",
      lastName:"",
      email:"",
      jobTitle:"",
      twitter:"",
    }
  }

  componentDidMount(){
    // I need to get the id of the badge and the do a petition
    // to fetch de badge's data.
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({loading: true, error: null});
    try{
      // The id of the batch is in the params of the URL
      // It is in props.match.params.badgeId
      const data = await api.badges.read(
        this.props.match.params.badgeId
      );
      this.setState({loading: false, form: data});
    }catch(error){
      this.setState({loading: false, error});
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
        <div className="BadgeEdit__hero">
          <img 
            className="BadgeEdit_hero-image img-fluid" 
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
              />
            </div>
            <div className="col-6">
              <h1>Edit Badge</h1>
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
      await api.badges.update(
        this.props.match.params.badgeId,
        this.state.form
      );
      this.setState({loading: false});

      this.props.history.push('/badges');

    }catch(error){
      this.setState({loading: false, error});
    }
  }
}

export default BadgeEdit;