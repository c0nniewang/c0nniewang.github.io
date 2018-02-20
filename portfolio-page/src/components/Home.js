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
      <hr className="style" /><br />
      <p className="App-intro">
        I am a full stack web developer currently based in NYC looking for my next adventure. I recently completed the 15-week Software Engineering Immersive program @ Flatiron School. 
      </p>
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default Home;