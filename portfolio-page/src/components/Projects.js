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
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default Projects;