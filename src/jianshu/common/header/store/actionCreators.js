import * as constants from './constants'
import axios from 'axios'
import { fromJS } from "immutable";

const changeList = (data) => {
  return {
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
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

export const searchMouseEnter = () => {
  return {
    type: constants.MOUSE_ENTER
  }
}

export const searchMouseLeave = () => {
  return {
    type: constants.MOUSE_LEAVE
  }
}

export const searchChangePage = (curPage, totalPage) => {
  if(curPage < totalPage - 1) {
    return {
      type: constants.CHANGE_PAGE,
      curPage: curPage + 1
    }
  } else{
    return {
      type: constants.CHANGE_PAGE,
      curPage: 0
    }
  }
}
