import React, {Fragment} from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'

class TodoList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  handleInputChange(e){
    const value = e.target.value;
    this.setState(() => ({
      inputValue : value
    }));
  }

  componentDidMount(){
    //建议把ajax放到componentDidMount方法里
    let url = "http://localhost:3001/todoList";
    axios.get(url)
      .then((response) => {
        this.setState(() => {
          return {
            list: response.data,
          }
        })
      })
      .catch(() => {
        console.log("axios error")
      })
  }
  
  handleBtnClick = () => {
    if(this.state.inputValue){
      //setState是异步函数，第二个参数可以传入callback方法
      this.setState((prevState) => ({
        list : [...prevState.list, prevState.inputValue],
        inputValue : ''
      }))
    }
  }
  
  handleItemDelete = (index) => {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list};
    })
  }

  render(){
    return (
      <Fragment>
        <div>
          <input 
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>submit</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem = () => {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            key={index} 
            index={index}
            content={item} 
            handleItemDelete={this.handleItemDelete}
          >
          </TodoItem>
        )
      })
    )
  }
}

export default TodoList