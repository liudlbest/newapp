import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable';

const getTopic = (data) => ({
  type: constants.GET_TOPIC_LIST,
  data: fromJS(data)
})

const getArticle = (data) => ({
  type: constants.GET_ARTICLE_LIST,
  data: fromJS(data)
})

const getRecommend = (data) => ({
  type: constants.GET_RECOMMEND_LIST,
  data: fromJS(data)
})

export const initTopicList = () => {
  return (dispatch) => {
    axios('/api/topicList.json')
      .then((res)=>{
        dispatch(getTopic(res.data.list))
      })
      .catch(()=>{
        console.log("get topic list error.");
      })
  }
}

export const initArticleList = () => {
  return (dispatch) => {
    axios('/api/articleList.json')
      .then((res)=>{
        dispatch(getArticle(res.data.list))
      })
      .catch(()=>{
        console.log("get article list error.");
      })
  }
}

export const initRecommendList = () => {
  return (dispatch) => {
    axios('/api/recommendList.json')
      .then((res)=>{
        dispatch(getRecommend(res.data.list))
      })
      .catch(()=>{
        console.log("get recommend list error.");
      })
  }
}