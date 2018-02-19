import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header></header>
        <Sidebar />
        <main>
          <p className="App-title">
            Hi, I'm Connie Wang.
          </p>
          <p className="App-intro">
            I am a full stack web developer currently based in NYC looking for my next adventure. After playing piano for 18 years, I decided to jump into something new and try my hand at coding. 
          </p>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
