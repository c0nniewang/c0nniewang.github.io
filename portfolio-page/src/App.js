import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'

class App extends Component {
  state = {activeItem: 'home'}

  // let display;

  handleClick = (ev) => {
    console.log(ev.target.id)

    this.setState({
      activeItem: ev.target.id
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header></header>
        <Sidebar handleClick={this.handleClick} />
        <main>
          <p className="App-title">
            Hi, I'm Connie Wang.
          </p>
          <p className="App-intro">
            I am a full stack web developer currently based in NYC looking for my next adventure. I recently completed the 15-week Software Engineering Immersive program @ Flatiron School. 
          </p>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
