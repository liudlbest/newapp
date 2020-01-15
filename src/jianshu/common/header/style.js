import styled from "styled-components";
import logo from '../../statistics/jianshu.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  position: relative;
  // box-sizing: border-box;
  line-height: 1.42857;
  border-color: #f0f0f0;
  border: 1px solid;
  border-width: 0 0 1px;
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
  left: 100px;
  top: 0;
  width: 940px;
  height: 100%;
  margin: 0 25px;
  position: absolute;
`

export const NavItem = styled.a`
  display: block;
  height: 100%;
  font-size: 17px;
  padding: 15px;
  color: #333;
  &.title {
    color: #ea6f5a;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
`

export const Button = styled.button`
  display: block;
  width: 80px;
  height: 38px;
  line-height: 24px;
  margin: 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 19px;
  font-size: 15px;
  color: #ea6f5a;
  // background-size: contain;
`

export const Input = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin: 15px;
  padding: 0 40px 0 20px ;
  border: 1px solid #eee;
  border-radius: 40px;
  font-size: 14px;
  box-sizing: border-box;
`