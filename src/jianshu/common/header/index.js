import React, { useEffect } from "react";
import {CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
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
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store';

const Header = (props) => {

  let spinIcon = React.createRef();
  
  const focused = useSelector( state => state.getIn(['header','focused']));
  const mouseIn= useSelector( state => state.getIn(['header', 'mouseIn']));
  const curPage = useSelector( state => state.getIn(['header', 'curPage']));
  const totalPage = useSelector( state => state.getIn(['header', 'totalPage']));
  const list = useSelector( state => state.getIn(['header', 'list']));//state.get('header').get('focused'),)
  const loginStatus = useSelector( state => state.getIn(['login', 'login']));
  
  const dispatch = useDispatch();

  const handleInputFocus = (list) => {
    // 优化：不用每次focus都去获取数据
    (list.size === 0) && dispatch(actionCreators.getList())
    dispatch(actionCreators.searchFocus())
  };
  const handleInputBlur = () => {
    dispatch(actionCreators.searchBlur())
  };
  const handleSearchMouseEnter = () => {
    dispatch(actionCreators.searchMouseEnter())
  };
  const handleMouseLeave = () => {
    dispatch(actionCreators.searchMouseLeave())
  };
  const handleChangePage= (curPage, totalPage, spin) => {
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
    console.log(originAngle);
    if(originAngle){
      originAngle = parseInt(originAngle);
    } else {
      originAngle = 0;
    }
    if(originAngle === 0){
      originAngle = 360;
    } else {
      originAngle = 0;
    }
    spin.style.transform = 'rotate(' + originAngle + 'deg)';
    dispatch(actionCreators.searchChangePage(curPage, totalPage))
  }

  const getSearchArea = (show) => {
    if(show){
      const pageList = [];
      const jsList = list.toJS();
      if(jsList.length){
        for (let i = 0; i < 10; i++) {
          let j = (curPage * 10 ) + i;
          if(jsList[j]){
            pageList.push(jsList[j])
          }
        }
      }

      return (
        <SearchInfo onMouseEnter={handleSearchMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch 
              onClick={() => handleChangePage(curPage, totalPage, spinIcon)}
            >
              {/* 刷新图标 */}
              <span ref={(icon) => {spinIcon = icon}} className="iconfont spin">&#xe63a;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {
              pageList.map((item) => (
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
      <Link to='/'>
        <Logo />
      </Link>
      <Nav>
        <NavItem className="active left">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <SearchWrapper>
          <CSSTransition in={focused} timeout={200} classNames="slide">
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          {/* 放大镜图标 */}
          <span className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe64d;</span>
          {getSearchArea(focused || mouseIn)}
        </SearchWrapper>
        <NavItem className="right">
          {/* Aa图标 */}
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        {
          // 根据登录状态显示登录或者退出按钮
          loginStatus ? 
            <NavItem 
              className="right"
              onClick={()=>dispatch(loginActionCreators.handleLogout())}
            >
              退出
            </NavItem>
            : (
            <Link to='/login'>
              <NavItem className="right">登录</NavItem>
            </Link>
            )
        }
      </Nav>
      <Addition>
        <Button className='writing'>
          {/* 羽毛笔图标 */}
          <span className="iconfont">&#xe6e5;</span>
          写文章
        </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )

}


export default Header;