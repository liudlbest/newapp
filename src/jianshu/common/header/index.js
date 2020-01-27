import React from "react";
import {CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Button,
  NavSearch,
  Addition,
  SearchWrapper,
} from './style';
import {actionCreators} from './store'

const Header = (props) => {
  
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="active left">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
            <span className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe64d;</span>
          
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

const mapStateToProps = (state) => ({
  focused: state.getIn(['header','focused']),//state.get('header').get('focused'),
})

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus : () => {
    dispatch(actionCreators.searchFocus)
  },
  handleInputBlur : () => {
    dispatch(actionCreators.searchBlur)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);