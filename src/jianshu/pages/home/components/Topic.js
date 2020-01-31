import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style';
import { actionCreators } from '../store';

const Topic = (props) => {

  const topicList = useSelector(
    state => state.getIn(['home', 'topicList'])
  )
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(actionCreators.initTopicList());
  },[dispatch])

  const getTopicList = () => {
    return (
      topicList.map( (item) => (
        <TopicItem key={item.get('id')}>{item.get('title')}</TopicItem>
      ))
    )
  }

  return (
    <TopicWrapper>
      {getTopicList()}
    </TopicWrapper>
  )
}

export default Topic;