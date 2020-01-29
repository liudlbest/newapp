import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store';

const Home = (props) => {

  const { changeScrollFlag, backTopScroll } = props;

  const handleBackTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", changeScrollFlag);
    return () => {
      window.removeEventListener("scroll", changeScrollFlag);
    };
  })

  return (
    <HomeWrapper>
      <HomeLeft>
        <img className="banner-img" alt="" src="https://static.zhihu.com/heifetz/assets/NewYear2020Banner.e5ccc19d.png"/>
        <Topic></Topic>
        <List></List>
      </HomeLeft>
      <HomeRight>
        <Recommend></Recommend>
        <Writer></Writer>
      </HomeRight>
      {
        backTopScroll ? (<BackTop onClick={handleBackTop}>返回顶部</BackTop>) : null
      }
    </HomeWrapper>
  )
}

const mapState = (state ) => ({
  backTopScroll: state.getIn(['home', 'backTopScroll'])
});

const mapDispatch = (dispatch) => ({
  changeScrollFlag: (e) => {
    if(document.documentElement.scrollTop > 300){
      console.log("hhhh");
      dispatch(actionCreators.toggleBackTop(true))
    } else {
      dispatch(actionCreators.toggleBackTop(false))
    }
  }
})

export default connect(mapState,mapDispatch)(Home);