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

  let spinIcon = React.createRef();
  
  const { list, focused, handleInputFocus, handleInputBlur, 
    mouseIn, handleSearchMouseEnter, handleMouseLeave, handleChangePage,
    curPage, totalPage } = props;

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
      <Logo />
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
        <NavItem className="right">登录</NavItem>
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

const mapStateToProps = (state) => ({
  focused: state.getIn(['header','focused']),//state.get('header').get('focused'),
  list: state.getIn(['header', 'list']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  curPage: state.getIn(['header', 'curPage']),
  totalPage: state.getIn(['header', 'totalPage'])
})

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus : (list) => {
    (list.size === 0) && dispatch(actionCreators.getList())
    dispatch(actionCreators.searchFocus())
  },
  handleInputBlur : () => {
    dispatch(actionCreators.searchBlur())
  },
  handleSearchMouseEnter: () => {
    dispatch(actionCreators.searchMouseEnter())
  },
  handleMouseLeave: () => {
    dispatch(actionCreators.searchMouseLeave())
  },
  handleChangePage: (curPage, totalPage, spin) => {
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);