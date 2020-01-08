import React, {Fragment} from 'react'

class TodoList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  handleInputChange(e){
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }

  render(){
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button>submit</button>
        </div>
        <ul>
          <li>学英语</li>
          <li>Learning React</li>
        </ul>
      </Fragment>
    )
  }
}

export default TodoList