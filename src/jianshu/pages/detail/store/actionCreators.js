import axios from 'axios';
import * as constants from './constants';

const getArticleDetail = (data) => ({
  type: constants.GET_ARTICLE_DEETAIL,
  data
})

export const initArticle = () => {
  return (dispatch) => {
    axios('/api/articleDetail.json')
      .then(res => {
        dispatch(getArticleDetail(res.data));
      })
      .catch( () =>{
        console.log("initArticleDetail error");
      })
   }
} 