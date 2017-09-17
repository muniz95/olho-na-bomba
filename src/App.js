import React, { Component } from 'react';
import { Button, Icon, Input } from 'react-materialize'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>Descubra se o valor na bomba está de acordo</h4>
        </div>
        <p className="App-intro">
          <Button waves='light'>
            <Icon>thumb_up</Icon>
          </Button>
        </p>
      </div>
    );
  }
}

export default App;
