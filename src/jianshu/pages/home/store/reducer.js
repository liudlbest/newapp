import { fromJS } from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_TOPIC_LIST:
      return state.set('topicList', action.data);
    case constants.GET_ARTICLE_LIST:
      return state.set('articleList', action.data);
    default:
      return state;;
  }
  
}