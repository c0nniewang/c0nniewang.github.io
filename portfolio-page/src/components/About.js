import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import img from '../img/DSC_6241.jpg'

const About = () => {
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}>
        <h1>
          more about me
        </h1>
        <hr className="style" />
        <div className="container">
          <img
          style={{ 
            "max-width": "250px", 
            "margin-top": "10px"
          }}
          src={img} 
          alt="headshot" />
          <p className="App-intro">
            I am a recent graduate of Northwestern University. With a background in <a className="thick">piano performance</a> and <a className="thick">cognitive science</a>, I have a passion for tackling complex problems and building solutions. I decided to take my love for challenges and take the plunge in learning programming and completed the <a className="thick">Software Engineering Immersive program</a> at Flatiron School in February 2017.
            <br /><br />
            I am passionate about art, science, and technology and am looking forward to discovering how these interests may overlap in interesting ways as I look for my next opportunity in the world of software development.
          </p>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default About;