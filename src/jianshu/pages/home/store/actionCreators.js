import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable';

const getTopicList = (data) => ({
  type: constants.GET_TOPIC_LIST,
  data: fromJS(data)
})

const getArticleList = (data) => ({
  type: constants.GET_ARTICLE_LIST,
  data: fromJS(data)
})

const getRecommendList = (data) => ({
  type: constants.GET_RECOMMEND_LIST,
  data: fromJS(data)
})

const getWriterList = (data) => ({
  type: constants.GET_WRITER_LIST,
  data: fromJS(data)
})

export const initTopicList = () => {
  return (dispatch) => {
    axios('/api/topicList.json')
      .then((res)=>{
        dispatch(getTopicList(res.data.list))
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
        dispatch(getArticleList(res.data.list))
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
        dispatch(getRecommendList(res.data.list))
      })
      .catch(()=>{
        console.log("get recommend list error.");
      })
  }
}

export const initWriterList = () => {
  return (dispatch) => {
    axios('/api/writerList.json')
      .then((res)=>{
        dispatch(getWriterList(res.data.list))
      })
      .catch(()=>{
        console.log("get Writer list error.");
      })
  }
}