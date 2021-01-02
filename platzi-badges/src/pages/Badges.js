import React from 'react'
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import {Link} from 'react-router-dom'
import confLogo from '../images/badge-header.svg'

import './styles/Badges.css';

import api from '../api';

class Badges extends React.Component{
  constructor(props){
    super(props); // Se inicia la superclase
    // El constructor es el mejor lugar para iniciar el estado.
    console.log("Contructor");
    this.state = {
      loading: true,
      error: null,
      data: []
    }
  }

  componentDidMount(){
    // El componente ya está en pantalla,
    // por lo que ya puede recibir datos.
    console.log("Mount done");
    this.fetchData();
  }

  fetchData = async () =>{
    this.setState({loading: true, error: null});
    try{
      const data = await api.badges.list();
      this.setState({loading: false, data});
    }catch(error){
      console.log("error")
      this.setState({loading: false, error});
    }
  }

  componentDidUpdate(){
    console.log("Update done")
  }

  render(){
    if(this.state.loading === true){
      return  <PageLoading />
    }

    if(this.state.error){
      return(
        <h1>
          Error: {this.state.error.message}
        </h1>
      )
    }

    console.log("Rendering");
    return(
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img 
                className="Badges_conf-logo" 
                src={confLogo}
                alt="Conf logo"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link 
              className="btn btn-primary" 
              to="/badges/new"
            >
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges;