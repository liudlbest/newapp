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
import {CSSTransition } from 'react-transition-group'

class Header extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      focused: false,
    }
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  

  render() {
    
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="active left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper>
            <CSSTransition in={this.state.focused} timeout={200} classNames="slide">
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
              <span className={this.state.focused ? 'iconfont focused' : 'iconfont'}>&#xe64d;</span>
            
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
  
  handleInputFocus(){
    this.setState({
      focused: true
    })
  }

  handleInputBlur(){
    this.setState({
      focused: false
    })
  }
}

export default Header;