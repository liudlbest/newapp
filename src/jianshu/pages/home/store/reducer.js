import { fromJS } from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  backTopScroll: true,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_TOPIC_LIST:
      return state.set('topicList', action.data);
    case constants.GET_ARTICLE_LIST:
      return state.set('articleList', action.data);
    case constants.GET_RECOMMEND_LIST:
      return state.set('recommendList', action.data);
    case constants.GET_WRITER_LIST:
      return state.set('writerList', action.data);
    case constants.ADD_MORE_ARTICLES:
      return state.merge({
        'articleList': state.get('articleList').concat(action.data),
        'articlePage': action.articlePage
      })
    case constants.TOGGLE_BACK_TOP:
      return state.set("backTopScroll", action.show)
    default:
      return state;
  }
  
}