import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Button,
  Input,
} from './style'

class Header extends Component {
  
  
  

  render() {
    
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="title left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <Input></Input>
          
        </Nav>
        <NavItem className="right">Aa</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right"><Button>注册</Button></NavItem>
        <NavItem className="right"><Button>写文章</Button></NavItem>
      </HeaderWrapper>
    )
  }
}

export default Header;