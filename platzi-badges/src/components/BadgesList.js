import React from 'react'
import Gravatar from './Gravatar';
import { Link } from 'react-router-dom'
import './styles/BadgesList.css'

function BadgeListItem(props){
  return(
    <div className="BadgesListItem">
      {getImageElement(props)}
      <div>
        <strong>
          {props.badge.firstName} {props.badge.lastName}
        </strong> 
        <br/>@{props.badge.twitter}
        <br/>{props.badge.jobTitle}
      </div>
    </div>
  )
}


function getImageElement(props){
  if(props.badge.avatarUrl){
    return(
      <img
        className="BadgesListItem__avatar"
        src={props.badge.avatarUrl} 
        alt="Conf logo"
      />
    );
  }
  return(
      <Gravatar
        className="BadgesListItem__avatar"
        email={props.badge.email}
        alt="Conf logo"
      />
  );
}

function BadgesList(props){
  if(props.badges.length === 0){
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
      {props.badges.map((badge) =>{
        return(
          <li key={badge.id}>
            <Link 
              className="text-reset text-decoration-none" 
              to={`/badges/${badge.id}`}
            >
              <BadgeListItem badge={badge}/>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default BadgesList;