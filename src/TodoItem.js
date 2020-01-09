import React from 'react'

class TodoItem extends React.Component{

  render() {
    return (
      <div 
        onClick={this.props.handleItemDelete}
      >
        {this.props.content}
      </div>
    )
  }
}

export default TodoItem