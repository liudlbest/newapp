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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addition,
  SearchWrapper,
} from './style';
import {actionCreators} from './store'

const Header = (props) => {
  
  const { list, focused, handleInputFocus, handleInputBlur  } = props;

  const getSearchArea = (show) => {
    if(show){
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {
              list.map((item) => (
                <SearchInfoItem key={item}>{item}</SearchInfoItem>
              ))
            }
          </div>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }


  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="active left">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <SearchWrapper>
          <CSSTransition in={focused} timeout={200} classNames="slide">
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span className={focused ? 'iconfont focused' : 'iconfont'}>&#xe64d;</span>
          {getSearchArea(focused)}
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
  list: state.getIn(['header', 'list'])
})

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus : () => {
    dispatch(actionCreators.getList())
    dispatch(actionCreators.searchFocus())
  },
  handleInputBlur : () => {
    dispatch(actionCreators.searchBlur())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);