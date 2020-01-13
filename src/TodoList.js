import React, {Fragment} from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'
import {INPUT_VALUE_CHANGE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST} from './redux/actionTypes'
import {connect } from 'react-redux'


class TodoList extends React.Component {

  componentDidMount(){
    //建议把ajax放到componentDidMount方法里
    this.props.initTodoList();
    
  }

  

  render(){
    return (
      <Fragment>
        <div>
          <input 
            value={this.props.inputValue} 
            onChange={this.props.handleInputChange}
          />
          <button onClick={this.props.handleBtnClick}>submit</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem = () => {
    console.log("getTodoItem", this.props);
    return (
      this.props.list.map((item, index) => {
        return (
          <TodoItem 
            key={index} 
            index={index}
            content={item} 
            handleItemDelete={(index)=>{this.props.handleItemDelete(index)}}
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e){
      let action = {
        type: INPUT_VALUE_CHANGE,
        inputValue: e.target.value
      }
      dispatch(action);
    },
    
    handleBtnClick(){
      let action = {
        type: ADD_TODO_ITEM
      }
      dispatch(action);
    },
    
    handleItemDelete(index) {
      console.log("handleItemDelete: ", index);
      let action = {
        type: DELETE_TODO_ITEM,
        index
      }
      dispatch(action);
    }, 

    initTodoList() {
      let url = "http://localhost:3001/todoList";
      var action = (_dispatch) => {
        axios.get(url)
        .then((response) => {
          const _action = {
            type: INIT_TODO_LIST,
            list: response.data
          }
          _dispatch(_action);
        })
        .catch(() => {
          console.log("axios error")
        })
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)