import React from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

const Home = () => {
  return (
    <HomeWrapper>
      <HomeLeft>
        <img className="banner-img" src="https://static.zhihu.com/heifetz/assets/NewYear2020Banner.e5ccc19d.png"/>
        <Topic></Topic>
        <List></List>
      </HomeLeft>
      <HomeRight>
        <Recommend></Recommend>
        <Writer></Writer>
      </HomeRight>
    </HomeWrapper>
  )
}

export default Home;