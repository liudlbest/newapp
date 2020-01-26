import * as constants from './constants'

const defaultState = {
  focused : false
}

export default (state = defaultState, action) => {
  let newState = {...state}
  switch (action.type){
    case constants.HANDLE_FOCUS:
      newState.focused = true;
      return newState;
    case constants.HANDLE_BLUR:
      newState.focused = false;
      return newState;
    default:
      return newState;
  }
}