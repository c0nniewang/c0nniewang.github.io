import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Medium from './components/Medium';
import Home from './components/Home'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  state = {activeItem: 'home'}

  handleClick = (ev) => {
    this.setState({
      activeItem: ev.target.id
    })
  }

  render() {
  let display;
    if (this.state.activeItem === 'home') {
      display = <Home />
    } else if (this.state.activeItem === 'about') {
      display = <About />
    } else if (this.state.activeItem === 'medium') {
      display = <Medium />
    } else if (this.state.activeItem === 'projects') {
      display = <Projects />
    }

    return (
      <div className="App">
        <header></header>
        <Sidebar
          state={this.state}
          handleClick={this.handleClick}
        />
        <main>
          {display}
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
