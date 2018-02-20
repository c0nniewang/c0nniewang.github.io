import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Home = () => {
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
      >
      <p className="App-title">
        Hi, I'm Connie Wang.
      </p>
      <hr className="style1" /><br />
      <p className="App-intro">
        I am a <a className="thick">full stack web developer</a> and <a className="thick">classically trained pianist</a> currently based in <a className="thick">NYC</a> looking for my next adventure.
      </p>
      <br /><br />
      <p className="App-intro">
      Say hello at connie.wang303@gmail.com.
      </p>
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default Home;