import React, { useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { actionCreators } from './store'
import { DetailWrapper, Header, Content } from './style'

const Detail = (props) => {
 
  const title = useSelector( state => state.getIn(['detail', 'title']));
  const content = useSelector( state => state.getIn(['detail', 'content']));
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionCreators.initArticle(props.match.params.id))
  }, [dispatch])

  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content dangerouslySetInnerHTML={{__html:content}}>
      </Content>
    </DetailWrapper>
  )
}

export default withRouter(Detail);