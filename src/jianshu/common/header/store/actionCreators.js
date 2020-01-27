import * as constants from './constants'
import axios from 'axios'
import { fromJS } from "immutable";

const changeList = (data) => {
  return {
    type: constants.CHANGE_LIST,
    data: fromJS(data)
  }
}

export const searchFocus = () => ({
  type: constants.HANDLE_FOCUS,
})

export const searchBlur = () => ({
  type: constants.HANDLE_BLUR,
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data))
    }).catch(() => {
      console.log("Error");
    })
  }
}