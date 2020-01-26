import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Button,
  NavSearch,
  Addition,
  SearchWrapper,
} from './style'

class Header extends Component {
  
  
  

  render() {
    
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="active left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <span className="iconfont">&#xe64d;</span>
          </SearchWrapper>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <NavItem className="right">登录</NavItem>
        </Nav>
        <Addition>
          <Button className='writing'>
            <span className="iconfont">&#xe6e5;</span>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header;