import React from 'react'
import Badge from '../components/Badge';
import header from '../images/platziconf-logo.svg';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api';

import './styles/BadgeDetails.css';
import { Link } from 'react-router-dom';

/*
  Este componente es una página, cuenta con:
    Nav bar
    hero
    badge
    formulario
*/


class BadgeDetails extends React.Component{
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

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({loading: true, error: null});
    try{
      const data = await api.badges.read(
        this.props.match.params.badgeId
      );
      this.setState({loading: false, form: data});
    }catch(error){
      this.setState({loading: false, error})
    }
  }

  render(){
    if(this.state.loading === true){
      return(
        <PageLoading/>
      );
    }

    if(this.state.error){
      return(
        <PageError error={this.state.error.message}/>
      )
    }

    return(
      <React.Fragment>
        {/* Hero */}
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img 
                  src={header}
                  alt="Logo"
                />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {`${this.state.form.firstName} ${this.state.form.lastName}`}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-7">
              <Badge
                firstName={this.state.form.firstName || "First name"}
                lastName={this.state.form.lastName || "Last name"}
                twitter={this.state.form.twitter || "Twitter"}
                jobTitle={this.state.form.jobTitle || "Job title"}
                email={this.state.form.email || "Email"}
              />
            </div>
            <div className="col-5">
              <h1>Actions:</h1>
              <div>
                <Link
                  className="btn btn-primary mb-4 BadgeDetails__buttons"
                  to={`/badges/${this.props.match.params.badgeId}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button className="btn btn-danger BadgeDetails__buttons">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeDetails;