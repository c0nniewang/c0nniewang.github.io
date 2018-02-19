import React from 'react'

class Sidebar extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="sidebar">
        <div
        className="button" 
        onClick={(e) => this.props.handleClick(e)}
        id="linkedin"
        >linkedin</div>
        <div 
        className="button" 
        id="medium"
        onClick={(ev) => this.props.handleClick(ev)}
        >medium</div>
        <div 
        className="button" 
        id="github"
        onClick={(ev) => this.props.handleClick(ev)}
        >github</div>
        <div 
        className="button" 
        id="projects"
        onClick={(ev) => this.props.handleClick(ev)}
        >projects</div>
        <div 
        className="button"
        id="about" 
        onClick={(ev) => this.props.handleClick(ev)}
        >about</div>
      </div>
    )
  }
}

export default Sidebar