import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;  
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  margin-left: 15px;
  margin-top: 30px;
  width: 625px;
  float: left;
  .banner-img{
    width: 625px;
    height: 95px;
  }
`

export const HomeRight = styled.div`
  float: right;
  margin-top: 30px;
  width: 240px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
`

export const TopicItem = styled.div`
  float: left;
  margin-left: 15px;
  padding: 0 10px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  color: #000;
  background: #f7f7f7;
`