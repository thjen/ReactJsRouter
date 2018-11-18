import React, { Component } from 'react';

class InfoProduct extends Component {
  render() {

    var match = this.props.match;
    console.log(match);

    return (
      <div className="container">
        <h1 style={{textAlign: "center"}}>This is InfoProduct</h1>
      </div>
    );
  }
}

export default InfoProduct;
