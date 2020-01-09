import React from 'react'

class TodoItem extends React.Component{

  handleClick = () => {
    const {handleItemDelete, index} = this.props;
    handleItemDelete(index);
  }

  render() {
    const {content} = this.props;
    return (
      <div 
        onClick={this.handleClick}
      >
        {content}
      </div>
    )
  }
}

export default TodoItem