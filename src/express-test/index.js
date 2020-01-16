import React, { Component } from 'react'
import axios from 'axios'

class ExpressTest extends Component {

  constructor(props){
    super(props);
    this.state = {
      apiResponse : "",
    }
  }

  callAPI() {
    // fetch("http://localhost:9000/testAPI")
    //   .then(res => res.text())
    //   .then( res => {
    //     console.log("testAPI respones: ", res)
    //     this.setState({apiResponse: res})
    //   });
    axios.get("http://localhost:9000/testAPI")
      .then( res => {
        console.log("testAPI res", res);
      })
  }

  componentDidMount(){
    console.log("componentDidMount-----");
    this.callAPI();
  }

  render() {
    return (
      <div>{this.state.apiResponse}</div>
    )
  }
}

export default ExpressTest;