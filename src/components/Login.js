import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      email: "",
      pass: "",
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onLogin = (event) => {
    event.preventDefault();
    if (this.state.email === "thjenxxxno1" && this.state.pass === "thjenit98") {
      localStorage.setItem("user",JSON.stringify({
        email: this.state.email,
        password: this.state.pass,
      }));
    }
  }

  render() {

    var location = this.props.location;
    var loggedUser = localStorage.getItem("user");
    if (loggedUser !== null) {
      return <Redirect to={{
          pathname: "/products",
          state: {
            from :location
          }
        }}
      />
    }
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
            <form onSubmit={this.onLogin}>
              <legend>Login</legend>

              <div className="form-group">
                <label>Email: </label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="email" 
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label>Password: </label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="pass" 
                  placeholder="Password"
                  value={this.state.pass}
                  onChange={this.onChange}
                />
              </div>
  
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>   
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
