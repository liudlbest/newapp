import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
// import rootReducer from "./reducers";

var reducer = function(...args){
  console.log('Reducer was called with args', args); 
}

var reducer_0 = function(state, action){
  console.log('Reducer was called with state', state, 'and action', action); 
}

var reducer_1 = function(state, action){
  console.log('Reducer was called with state', state, 'and action', action); 
  if(typeof state === 'undefined'){
    return {}
  }
  return state;
}

var reducer_2 = function(state = {}, action){
  console.log('Reducer was called with state', state, 'and action', action); 
  return state;
}

var reducer_3 = function(state = {}, action){
  console.log('Reducer was called with state', state, 'and action', action); 
  switch (action.type) {
    case "SAY_SOMETHING": 
      return {
        ...state,
        message: action.value
      }
    default: 
      return state;
  }
  
}

var userReducer = function(state = {}, action){
  console.log('userReducer was called with state', state, 'and action', action); 
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    default: 
      return state;
  } 
}

var itemsReducer = function(state = [], action){
  console.log('itemsReducer was called with state', state, 'and action', action); 
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ]
    default: 
      return state;
  } 
}

var reducer_4 = combineReducers({
  user: userReducer,
  items: itemsReducer
})

var store_1 = createStore(reducer_4)

console.log("\n" , "### It starts here");
console.log('store_1 state after initialization:', store_1.getState())

var setNameCreatorAction = (name) => ({
  type: 'SET_NAME',
  name
})

// store_1.dispatch({
//   //type: 'AN_ACTION'

//   // type: 'SET_NAME',
//   // name: 'Liu Dalong'

//   type: 'ADD_ITEM',
//   item: 'new item'
// });

store_1.dispatch(setNameCreatorAction("Liu Dalong"));

console.log('store_1 state after dispatch:', store_1.getState())

var reducer_5 = combineReducers({
  speaker: (state = {}, action) => {
    switch (action.type) {
      case "SAY": 
        return {
          ...state,
          message: action.message
        }
      default:
        return state;
    }
  }
});

var sayActionCreator = (message) => ({
  type: "SAY",
  message
})

var store_2 = createStore(reducer_5);

store_2.dispatch(sayActionCreator("Hello"));

console.log("store_2 state after dispatch say action ", store_2.getState());

// 自定义中间件
var logMiddleWare = (dispatch, getState) => {
  return function(next){
    return function(action){
      console.log("logMiddleware action received ", action);
      return next(action);
    }
  }
}

const finalCreateStore = applyMiddleware(logMiddleWare, thunkMiddleWare)(createStore);

var store_async = finalCreateStore(reducer_5);

var asyncSayActionCreator = (message) => {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({
        type: "SAY",
        message
      })
      console.log(new Date());
      console.log("0 store_async state after dispatch say async action", store_async.getState());
    }, 3000);
  }
}

console.log(new Date());
store_async.dispatch(asyncSayActionCreator("async Hello"));
store_async.dispatch(asyncSayActionCreator("async Hello2"));


// export default createStore(reducer_1);
