import React from 'react'
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetails from './BadgeDetails';

import api from '../api';

import './styles/BadgeDetails.css';

/*
  Este componente es una página, cuenta con:
    Nav bar
    hero
    badge
    formulario
*/


class BadgeDetailsContainer extends React.Component{
  state = {
    loading: false,
    error: null,
    data: {
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
      this.setState({loading: false, data: data});
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
        <PageError error={this.state.error.message} />
      )
    }

    return(
      <BadgeDetails badge={this.state.data} containerProps={this.props}/>
    )
  }
}

export default BadgeDetailsContainer;