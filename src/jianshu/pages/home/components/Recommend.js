import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { RecommendWrapper, RecommendItem } from '../style'
import { actionCreators } from '../store'

const Recommend = (props) => {

  const { list, initRecommendList } = props;

  useEffect(()=>{
    if(list.size === 0){
      initRecommendList();
    }
  })

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

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

const mapDispatch = (dispatch) => ({
  initRecommendList: () => {
    dispatch(actionCreators.initRecommendList())
  }
})

export default connect(mapState, mapDispatch)(Recommend);