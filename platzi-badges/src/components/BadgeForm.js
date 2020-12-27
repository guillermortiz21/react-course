import React from 'react'

class BadgeForm extends React.Component{
  render(){
    return(
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              First Name
            </label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="firstName"
            />
          </div>
          <button 
            className="btn btn-primary"
            onClick={this.handleClick}
            //type="button"
          >
            Save
          </button>
        </form>
      </div>
    )
  }

  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  }

  handleClick = (e) => {
    console.log("Button was clicked");
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit!")
  }
}

export default BadgeForm