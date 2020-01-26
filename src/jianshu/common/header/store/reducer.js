import {
  HANDLE_FOCUS,
  HANDLE_BLUR
} from './actionTypes'

const defaultState = {
  focused : false
}

export default (state = defaultState, action) => {
  let newState = {...state}
  switch (action.type){
    case HANDLE_FOCUS:
      newState.focused = true;
      return newState;
    case HANDLE_BLUR:
      newState.focused = false;
      return newState;
    default:
      return newState;
  }
}