import React from 'react'

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <button id="sidebar-menu">linkedin</button>
        <button id="sidebar-menu">medium</button>
        <button id="sidebar-menu">github</button>
        <button id="sidebar-menu">projects</button>
        <button id="sidebar-menu">about</button>
      </div>
    )
  }
}

export default Sidebar