import React, {Fragment} from 'react'

class TodoList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: ['Learning English', 'Learning IT', 'Learning React']
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
                <li 
                  key={index} 
                  onClick={this.handleItemDelete.bind(this, index)}
                >
                  {item}
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList