import React from 'react'

class BadgeForm extends React.Component{
  // Inicializar estado, esto nos ayuda para poner placeholders
  // Se hace un estado controlado.
  // Del state obtenemos los datos que tienen guardados los campos de texto.
  state = {
    jobTitle: "Developer"
  };

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
              value={this.state.firstName}
              />
            <label>
              Last Name
            </label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="lastName"
              value={this.state.lastName}
              />
            <label>
              Email
            </label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="email" 
              name="email"
              value={this.state.email}
              />
            <label>
              Job Title
            </label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="jobTitle"
              value={this.state.jobTitle}
              />
            <label>
              Twitter
            </label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="twitter"
              value={this.state.twitter}
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
    // Guardamos en estado
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = (e) => {
    console.log("Button was clicked");
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit!")
    console.log(this.state);
  }
}

export default BadgeForm