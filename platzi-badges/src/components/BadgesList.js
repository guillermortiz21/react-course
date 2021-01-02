import React from 'react'
import './styles/BadgesList.css'

class BadgeListItem extends React.Component{
  render(){
    return(
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl} 
          alt="Avatar"
        />
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
}

class BadgesList extends React.Component{
  render(){ 
    return(
      <ul className="BadgesList">
        {this.props.badges.map((badge) =>{
          return(
            <li key={badge.id}>
              <BadgeListItem badge={badge}/>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList;