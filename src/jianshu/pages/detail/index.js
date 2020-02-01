import React, { useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";

import { actionCreators } from './store'
import { DetailWrapper, Header, Content } from './style'

const Detail = () => {
 
  const title = useSelector( state => state.getIn(['detail', 'title']));
  const content = useSelector( state => state.getIn(['detail', 'content']));
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionCreators.initArticle())
  }, [dispatch])

  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content dangerouslySetInnerHTML={{__html:content}}>
      </Content>
    </DetailWrapper>
  )
}

export default Detail;