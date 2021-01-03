import React from 'react';

import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import header from '../images/platziconf-logo.svg';
import './styles/BadgeDetails.css';
import { Link } from 'react-router-dom';

function BadgeDetails(props){
  // Hooks!
  const [count, setCount] = React.useState(0);

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
                {`${props.badge.firstName} ${props.badge.lastName}`}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-7">
            <Badge
              firstName={props.badge.firstName || "First name"}
              lastName={props.badge.lastName || "Last name"}
              twitter={props.badge.twitter || "Twitter"}
              jobTitle={props.badge.jobTitle || "Job title"}
              email={props.badge.email || "Email"}
            />
          </div>
          <div className="col-5">
            <h1>Actions:</h1>
            <div>

              <button onClick={() => {setCount(count + 1)}} className="btn btn-primary mb-4">
                Increase count: {count}
              </button>

              <Link
                className="btn btn-primary mb-4 BadgeDetails__buttons"
                to={`/badges/${props.containerProps.match.params.badgeId}/edit`}
              >
                Edit
              </Link>
            </div>
            <div>
              <button 
                className="btn btn-danger BadgeDetails__buttons"
                onClick={props.onOpenModal}
              >
                Delete
              </button>
              <DeleteBadgeModal 
                isOpen={props.modalIsOpen} 
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;