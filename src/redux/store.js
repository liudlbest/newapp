import { createStore, applyMiddleware } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import reducer from './reducer'

var finalCreateStore = applyMiddleware(thunkMiddleWare)(createStore);
var store = finalCreateStore(reducer);

export default store;