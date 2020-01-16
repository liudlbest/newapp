import React, {Component} from "react";
import { Provider } from "react-redux";
import TodoList from './TodoList';
import store from './redux/store'
import ExpressTest from './express-test'

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <TodoList/>
        <ExpressTest />
      </Provider>
    )
  }
}

export default App;