import React, {Component} from "react";
import { Provider } from "react-redux";
import TodoList from './TodoList';
import store from './redux/store'

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <TodoList/>
      </Provider>
    )
  }
}

export default App;