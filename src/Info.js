import React, { Component } from 'react';

class InfoScreen extends Component {
  render() {
    return (
      <div>
          <h2>your id is {this.props.match.params.id}</h2>
      </div>
    );
  }
}

export default InfoScreen;
