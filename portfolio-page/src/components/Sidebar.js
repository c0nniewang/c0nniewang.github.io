import React from 'react'

const Sidebar = (props) => {
  const state = props.state
  return (
    <div className="sidebar">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/c0nniewang"
        className="button" 
        id="github">github >
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/wangc0nnie/"
        className="button"
        onClick={(e) => props.handleClick(e)}
        id="linkedin">linkedin >
      </a>
      <a 
        className="button" 
        id="medium"
        onClick={(ev) => props.handleClick(ev)}
        >blog {state.activeItem === 'medium' ? " -" : " +"}
      </a>
      <a
        className="button" 
        id="projects"
        onClick={(ev) => props.handleClick(ev)}
        >projects {state.activeItem === 'projects' ? " -" : " +"}
      </a>
      <a 
        className="button"
        id="about" 
        onClick={(ev) => props.handleClick(ev)}
        >about {state.activeItem === 'about' ? " -" : " +"}
      </a>
      <a 
        className="button"
        id="home" 
        onClick={(ev) => props.handleClick(ev)}
        >home {state.activeItem === 'home' ? " -" : " +"}
      </a>
    </div>
  )
}

export default Sidebar