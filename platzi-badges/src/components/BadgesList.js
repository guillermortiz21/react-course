import React from 'react'
import Gravatar from './Gravatar';
import { Link } from 'react-router-dom'
import './styles/BadgesList.css'

class BadgeListItem extends React.Component{
  render(){
    return(
      <div className="BadgesListItem">
        {this.getImageElement()}
        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong> 
          <br/>@{this.props.badge.twitter}
          <br/>{this.props.badge.jobTitle}
        </div>
      </div>
    )

  }

  getImageElement = () => {
    if(this.props.badge.avatarUrl){
      return(
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl} 
          alt="Conf logo"
        />
      );
    }
    return(
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt="Conf logo"
        />
    );
  }
}

class BadgesList extends React.Component{
  render(){
    if(this.props.badges.length === 0){
      return(
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return(
      <ul className="BadgesList">
        {this.props.badges.map((badge) =>{
          return(
            <li key={badge.id}>
              <Link 
                className="text-reset text-decoration-none" 
                to={`/badges/${badge.id}/edit`}
              >
                <BadgeListItem badge={badge}/>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList;