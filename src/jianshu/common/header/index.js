import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Button,
  NavSearch,
  Addition,
} from './style'

class Header extends Component {
  
  
  

  render() {
    
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="active left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavSearch></NavSearch>
          <NavItem className="right">Aa</NavItem>
          <NavItem className="right">登录</NavItem>
        </Nav>
        <Addition>
          <Button className='writing'>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header;