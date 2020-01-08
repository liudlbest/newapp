import React, {Fragment} from 'react'

function TodoList() {
  return (
    <Fragment>
      <div><input/><button>submit</button></div>
      <ul>
        <li>学英语</li>
        <li>Learning React</li>
      </ul>
    </Fragment>
  )
}

export default TodoList