import React, { Component } from "react";

class task6 extends Component {
  render() {
    const { title, Link1, Link2, Link3 } = this.props; 
    return (
      <header >
        <h1 >{title}</h1>
        <nav >
          <a href={Link1} style={{textDecoration:"none"}}>my githup</a> | 
          <a href={Link2} style={{textDecoration:"none"}}>my linkedin</a> | 
          <a href={Link3} style={{textDecoration:"none"}}>my portfolio</a>
        </nav>
      </header>
    );
  }
}
export default task6;
