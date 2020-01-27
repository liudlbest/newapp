import * as constants from './constants'
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused : false,
  list: [],
})

export default (state = defaultState, action) => {
  switch (action.type){
    case constants.HANDLE_FOCUS:
      return state.set('focused', true);
    case constants.HANDLE_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_LIST:
      return state.set('list', action.data);
    default:
      return state;
  }
}