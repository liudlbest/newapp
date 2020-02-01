import React from 'react'
import { useSelector } from "react-redux";

import { DetailWrapper, Header, Content } from './style'

const Detail = () => {
 
  const title = useSelector( state => state.getIn(['detail', 'title']));
  const content = useSelector( state => state.getIn(['detail', 'content']));

  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content dangerouslySetInnerHTML={{__html:content}}>
      </Content>
    </DetailWrapper>
  )
}

export default Detail;