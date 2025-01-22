import React, { Component } from "react";

class Test7 extends Component {
  render() {
    const { label, onClick } = this.props;
    return <button onClick={onClick}>{label}</button>;
  }
  
}

export default Test7;
