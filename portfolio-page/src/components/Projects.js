import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Projects = () => {
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}>
        <h1>
          projects
        </h1>
        <hr className="style" />
        <p className="App-intro">
        Coming soon!
        </p>
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default Projects;