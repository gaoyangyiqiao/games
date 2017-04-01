import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import LoginScreen from './Login.js'
import InfoScreen from './Info.js'

class App extends Component {
  render() {
    const {match} = this.props

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Games</h2>
        </div>

        <Route path={`${match.url}/login`} component={LoginScreen} />
        <Route path={`${match.url}/info/:id`} component={InfoScreen} />
      </div>
    );
  }
}

export default App;
