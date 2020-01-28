import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable';

const getList = (data) => ({
  type: constants.GET_TOPIC_LIST,
  data: fromJS(data)
})

export const initTopicList = () => {
  return (dispatch) => {
    axios('/api/topicList.json')
      .then((res)=>{
        dispatch(getList(res.data.list))
      })
      .catch(()=>{
        console.log("get topic list error.");
      })
  }
}