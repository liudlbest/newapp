import React, {Fragment} from 'react'
import TodoItem from './TodoItem'

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

  
  handleBtnClick = () => {
    if(this.state.inputValue){
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }
  }
  
  handleItemDelete = (index) => {
    console.log(index);
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  render(){
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick}>submit</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <TodoItem 
                  key={index} 
                  content={item} 
                  handleItemDelete={this.handleItemDelete.bind(this, index)}
                >
                </TodoItem>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList