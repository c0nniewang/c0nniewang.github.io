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
        <div className="column">
          <img
          style={{ 
            "max-width": "250px", 
            "margin-top": "10px",
            "border": "2px solid #d3d3d3"
          }}
          src={img} 
          alt="headshot" />
        </div>
        <div className="column">
          <p className="App-intro">
            I am a recent graduate of Northwestern University. With a background in <a 
            className="thick" 
            href="https://www.youtube.com/watch?v=Payg-jBWqrI"
            target="_blank"
            rel="noopener noreferrer"
            >piano performance</a> and <a 
            className="thick"
            href="https://docs.google.com/presentation/d/1FC9Y5Cs0lVVVWZylJjo0rnJL7hHzB0_-_OpXu1KaOag/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            >cognitive science</a>, I have a passion for tackling complex problems and building solutions. I decided to take my love for challenges and take the plunge in learning programming and completed the <a className="thick">Software Engineering Immersive</a> program at <a className="thick">Flatiron School</a> in February 2017.
            <br /><br />
            I am passionate about art, science, and technology and am excited to discover how these interests may intersect in interesting ways as I look for my next opportunity in the world of software development.
          </p>
          <a
            href="https://s3.us-east-2.amazonaws.com/development-personal/Connie+Wang+2018+Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            ><button>View Resume ></button>
          </a>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default About;