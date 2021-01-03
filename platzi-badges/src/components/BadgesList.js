import React from 'react'
import Gravatar from './Gravatar';
import SearchBar from './SearchBar';
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

function BadgeToString(badge){
  return `${badge.firstName} ${badge.lastName}`
}

function BadgesList(props){
  const [filteredBadges, setFilteredBadges] = React.useState(props.badges);
  if(filteredBadges.length === 0){
    return(
      <div>
        <SearchBar 
          array={props.badges} 
          setFilteredArray={setFilteredBadges}
          toString={BadgeToString}
        >Filter Badges</SearchBar>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return(
    <div className="BadgesList">
      <SearchBar 
        array={props.badges} 
        setFilteredArray={setFilteredBadges}
        toString={BadgeToString}
      >Filter Badges</SearchBar>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) =>{
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
    </div>
  )
}

export default BadgesList;