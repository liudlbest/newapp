import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;  
  width: 960px;
  margin: 0 auto;
`;

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
  width: 280px;
`

export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 20px;
  width: 40px;
  height: 50px;
  padding: 3px 0;
  font-size: 14px;
  box-sizing: border-box; 
  text-align: center;
  border: 1px solid #aaa;
  cursor: pointer;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
`;

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
`;

export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const GetMoreArticles = styled.div`
  width: 100%;
  height: 40px;
  font-size: 15px;
  line-height: 15px;
  padding: 10px 15px;
  margin: 30px 0;
  text-align: center;
  color: #fff;
  background: #a5a5a5;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin: 0 0 6px;
  background: url(${(props)=>props.imgUrl});
  background-size: contain; 
`;

export const WriterWrapper = styled.div`
  width: 280px;
  height: 200px;
`;

export const WriterHeader = styled.div`
  height: 30px;
  font-size: 14px;
  color: #969696;
  
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  line-height: 14px;
  .spin{
    display: block;
    float: left;
    margin-right: 2px;
    font-size: 12px;
    transition: all .2s ease-in;
    transition-origin: center center;
  }
`;


export const WriterInfo  = styled.div`
  width: 280px;
  height: 295px;
  
`;
export const WriterItem  = styled.div`
  // overflow: hidden; 
  width: 280px;
  height: 47px;
  margin-top: 15px;
  box-sizing: border-box;
  .writer-pic{
    float: left;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .writer-name{
    margin-top: 5px;
    margin-right: 60px;
    width: 120px;
    height: 25px;
    font-size: 14px;
    float: left;
  }
  .writer-desc{
    width: 120px;
    margin-top: 5px;
    margin-right: 60px;
    height: 20px;
    font-size: 12px;
    float: left;
  }
  .writer-follow{
    float: right;
    height: 20px;
    font-size: 14px;
    line-height: 14px;
    color: #42c02e
  }
`;


