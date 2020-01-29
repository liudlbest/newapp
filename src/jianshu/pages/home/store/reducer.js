import { fromJS } from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [{
    "id": 1,
    "imgUrl": "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    "name": "张三",
    "wordsNum": 830.2,
    "likesNum": 2.7
    
  }, {
    "id": 2,
    "imgUrl": "https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    "name": "李四",
    "wordsNum": 230.5,
    "likesNum": 3.4
  }, {
    "id": 3,
    "imgUrl": "https://upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    "name": "王五",
    "wordsNum": 85.6,
    "likesNum": 1.9
  }, {
    "id": 4,
    "imgUrl": "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    "name": "赵六",
    "wordsNum": 503.7,
    "likesNum": 8.2
  }],
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
    default:
      return state;;
  }
  
}