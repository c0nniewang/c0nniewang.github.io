import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import About from './components/About'
import Projects from './components/Projects'
import Medium from './components/Medium'

class App extends Component {
  state = {activeItem: 'home'}

  handleClick = (ev) => {
    console.log(ev.target.id)

    this.setState({
      activeItem: ev.target.id
    })
  }

  render() {
  let display;
    if (this.state.activeItem === 'home') {
      display = (<div><p className="App-title">
            Hi, I'm Connie Wang.
          </p>
          <p className="App-intro">
            I am a full stack web developer currently based in NYC looking for my next adventure. I recently completed the 15-week Software Engineering Immersive program @ Flatiron School. 
          </p></div>)
    } else if (this.state.activeItem === 'about') {
      display = <About />
    } else if (this.state.activeItem === 'blog') {
      display = <Medium />
    } else if (this.state.activeItem === 'projects') {
      display = <Projects />
    }

    console.log(this.state)
    return (
      <div className="App">
        <header></header>
        <Sidebar
        state={this.state}
        handleClick={this.handleClick} />
        <main>
          {display}
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
