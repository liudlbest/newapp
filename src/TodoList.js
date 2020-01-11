import React, {Fragment} from 'react'
import TodoItem from './TodoItem'
import TestPropsRender from './TestPropsRender';
import TestRender from './TestRender';

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

  
  handleBtnClick = () => {
    if(this.state.inputValue){
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
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>submit</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
        <TestRender/>
        <TestPropsRender content={this.state.inputValue} />
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