import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component{

  handleClick = () => {
    const {handleItemDelete, index} = this.props;
    handleItemDelete(index);
  }

  render() {
    const {content, test} = this.props;
    return (
      <div 
        onClick={this.handleClick}
      >
        {content} - {test}
      </div>
    )
  }

  componentWillUnmount(){
    console.log(this.props.content + " child component will unmount");
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  handleItemDelete: PropTypes.func,
  test: PropTypes.string
}

TodoItem.defaultProps = {
  test: '^_^'
}

export default TodoItem