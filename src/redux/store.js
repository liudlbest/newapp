import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleWare),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

// var finalCreateStore = applyMiddleware(thunkMiddleWare)(createStore);
// var store = finalCreateStore(reducer);

export default store;