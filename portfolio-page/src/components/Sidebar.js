import React from 'react'

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <a
      target="_blank"
      href="https://www.linkedin.com/in/wangc0nnie/"
      className="button"
      onClick={(e) => props.handleClick(e)}
      id="linkedin"
      >linkedin</a>
      <a 
      className="button" 
      id="medium"
      onClick={(ev) => props.handleClick(ev)}
      >blog</a>
      <a
      target="_blank"
      href="https://github.com/c0nniewang"
      className="button" 
      id="github"
      >github</a>
      <a
      className="button" 
      id="projects"
      onClick={(ev) => props.handleClick(ev)}
      >projects</a>
      <a 
      className="button"
      id="about" 
      onClick={(ev) => props.handleClick(ev)}
      >about</a>
    </div>
  )
}

export default Sidebar