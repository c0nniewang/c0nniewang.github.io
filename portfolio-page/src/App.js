import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="App-text">
          <p className="App-title">
            Hi, I'm Connie Wang.
          </p>
          <p className="App-intro">
            I am a full stack web developer currently based in NYC looking for my next adventure.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
