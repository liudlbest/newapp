import React, { Component } from 'react';

class TestPropsRender extends Component {
  render () {
    console.log("Props render()");
    return (
      <div>{this.props.content}</div>
    )
  }
}

export default TestPropsRender;