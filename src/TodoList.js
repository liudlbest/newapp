import React, {Fragment} from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'
import store from './redux/store'
import {INPUT_VALUE_CHANGE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST} from './redux/actionTypes'

class TodoList extends React.Component {

  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe( () => {
      this.setState(store.getState())
    })
  }

  handleInputChange(e){
    // const value = e.target.value;
    // this.setState(() => ({
    //   inputValue : value
    // }));
    const action = {
      type: INPUT_VALUE_CHANGE,
      inputValue: e.target.value
    }
    store.dispatch(action);
  }

  componentDidMount(){
    //建议把ajax放到componentDidMount方法里
    let url = "http://localhost:3001/todoList";
    var action = (dispatch) => {
      axios.get(url)
      .then((response) => {
        const action = {
          type: INIT_TODO_LIST,
          list: response.data
        }
        dispatch(action);
      })
      .catch(() => {
        console.log("axios error")
      })
    }
    store.dispatch(action);
    
  }
  
  handleBtnClick = () => {
    const action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action);
  }
  
  handleItemDelete = (index) => {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action);
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