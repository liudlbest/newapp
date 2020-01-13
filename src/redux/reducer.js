import {INPUT_VALUE_CHANGE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'

var defaultState = {
  inputValue: "",
  list: []
}
var reducer = (previousState = defaultState, action) => {
  var state = {...previousState};
  switch (action.type) {
    case INPUT_VALUE_CHANGE:
      state.inputValue = action.inputValue
      break;
    case ADD_TODO_ITEM:
      state.list.push(state.inputValue);
      state.inputValue = '';
      break;
    case DELETE_TODO_ITEM:
      state.list.splice(action.index, 1);
      break;
    case INIT_TODO_LIST:
      console.log("reducer init", action.list);
      state.list = [...action.list];
      break;
    default: 
      break;
  }
  return state;
}

export default reducer;