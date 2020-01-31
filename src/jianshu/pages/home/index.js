import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store';

const Home = (props) => {

  const backTopScroll = useSelector(state => state.getIn(['home', 'backTopScroll']));
  const dispatch = useDispatch();

  // 修改“返回顶部”图标标志
  const changeScrollFlag = useCallback(() => {
    if(document.documentElement.scrollTop > 300){
      dispatch(actionCreators.toggleBackTop(true))
    } else {
      dispatch(actionCreators.toggleBackTop(false))
    }
  },[dispatch])
  
  // 返回顶部
  const handleBackTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", changeScrollFlag);
    return () => {
      window.removeEventListener("scroll", changeScrollFlag);
    };
  }, [changeScrollFlag])

  return (
    <HomeWrapper>
      <HomeLeft>
        {/* 首页图 */}
        <img className="banner-img" alt="" src="https://static.zhihu.com/heifetz/assets/NewYear2020Banner.e5ccc19d.png"/>
        {/* 讨论话题 */}
        <Topic></Topic>
        {/* 文章列表 */}
        <List></List>
      </HomeLeft>
      <HomeRight>
        {/* 推荐分类 */}
        <Recommend></Recommend>
        {/* 推荐作者 */}
        <Writer></Writer>
      </HomeRight>
      {
        backTopScroll ? (<BackTop onClick={handleBackTop}>返回顶部</BackTop>) : null
      }
    </HomeWrapper>
  )
}

export default Home;