import React, { Component } from 'react';
import Login from './components/login/index';
import './App.css';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <div className="App-header">
          <img src='/images/app-background.jpg' alt=''/>
        </div>
      </div>
    );
  }
}

export default App;
