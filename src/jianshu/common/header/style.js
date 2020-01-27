import styled from "styled-components";
import logo from '../../statistics/jianshu.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  // display: block;
  background: url(${logo});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`

export const NavItem = styled.a`
  line-height: 56px;
  font-size: 17px;
  padding: 0 15px; //上下0，左右15px
  color: #333;
  margin: 0 auto;
  &.active {
    color: #ea6f5a;
  }
  &.left {
    float: left; //浮动的话，不占位
  }
  &.right {
    float: right;
    color: #969696;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused{
      background: #bbb
    }
  }
  
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin: 9px;
  padding: 0 38px 0 20px ;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: 1px solid #eee;
  outline: none;
  border-radius: 19px; //高度的一半
  font-size: 14px;
  background: #eee;
  color: #666;
  &::placeholder {
    color: #999
  }
  &.focused{
    width: 220px;
  }
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 220px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    transition: all .2s ease-out;
    width: 160px;
  }
`

export const SearchInfo = styled.div`
position: absolute;
left: 0;
top: 56px;
width: 240px;
padding: 0 20px;
box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`

export const SearchInfoTitle = styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size: 14px;
color: #969696;
`

export const SearchInfoSwitch = styled.span`
float: right;
font-size: 13px;
`

export const SearchInfoItem = styled.a`
display: block; //不然设置不了宽高
float: left;
line-height: 20px;
padding: 0 5px;
margin-right: 5px;
margin-bottom: 15px;
border: 1px solid #ddd;
font-size: 14px;
color: #777;
`


export const Addition = styled.div`
position: absolute;
right: 0;
top: 0;
height: 56px;
`

export const Button = styled.button`
  float: right;
  width: 100px;
  height: 40px;
  line-height: 24px;
  margin: 8px 12px 0;
  padding: 6px 12px;
  border: 1px solid #ec6149;
  border-radius: 20px;
  font-size: 14px;
  color: #ea6f5a;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`