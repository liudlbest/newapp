import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component{

  handleClick = () => {
    const {handleItemDelete, index} = this.props;
    handleItemDelete(index);
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.content !== this.props.content){
      return true;
    } else {
      return false;
    }
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

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  handleItemDelete: PropTypes.func,
}



export default TodoItem