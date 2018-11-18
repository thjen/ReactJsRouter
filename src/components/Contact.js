import React, { Component } from 'react';
import {Prompt} from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state={
      isChecked: false,
    };
  }
  render() {
    return (
      <div className="container text-center">
        This is Contact<br/>
        <button type="button" className="btn btn-info" onClick={() => {this.setState({isChecked: false})}}>Allow</button><br/>
        <button type="button" className="btn btn-danger" onClick={() => {this.setState({isChecked: true})}}>Unallow</button><br/>
        <Prompt
          when={this.state.isChecked}
          message={location => (`You sure want to go ${location.pathname}`)}
        />
      </div>
    );
  }
}

export default Contact;
