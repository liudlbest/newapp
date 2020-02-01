import { fromJS } from "immutable";

import * as constants from './constants'

const defaultState = fromJS({})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_ARTICLE_DEETAIL:
      return state.merge({
        ...action.data
      })
    default:
      return state;
  }
}