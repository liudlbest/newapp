import React, {Fragment} from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'
import {INPUT_VALUE_CHANGE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST} from './redux/actionTypes'
import {connect } from 'react-redux'


class TodoList extends React.Component {

  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  handleInputChange(e){
    const action = {
      type: INPUT_VALUE_CHANGE,
      inputValue: e.target.value
    }
    this.props.dispatch(action);
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
    this.props.dispatch(action);
    
  }
  
  handleBtnClick = () => {
    const action = {
      type: ADD_TODO_ITEM
    }
    this.props.dispatch(action);
  }
  
  handleItemDelete = (index) => {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    this.props.dispatch(action);
  }

  render(){
    return (
      <Fragment>
        <div>
          <input 
            value={this.props.inputValue} 
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
      this.props.list.map((item, index) => {
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

const mapStateToProps = (state/*, props*/) => ({
  inputValue: state.inputValue,
  list: state.list,
})

export default connect(mapStateToProps)(TodoList)