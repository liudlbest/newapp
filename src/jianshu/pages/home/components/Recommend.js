import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { RecommendWrapper, RecommendItem } from '../style'
import { actionCreators } from '../store'

const Recommend = (props) => {

  const list = useSelector( state => state.getIn(['home', 'recommendList']))
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(actionCreators.initRecommendList());
  }, [dispatch])

  const getList = (list) => (
    list.map((item) => (
      <RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")}></RecommendItem>
    ))
  )

  return (
    <RecommendWrapper>
      {getList(list)}
    </RecommendWrapper>
  )
}

export default Recommend;