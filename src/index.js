import React from 'react';
import ReactDOM from 'react-dom';
import JianshuApp from './jianshu/JianshuApp';
// import App from './App';
import {GlobalStyle } from './jianshu/statics/iconfont/iconfont'


ReactDOM.render(
  (<React.Fragment>
    <GlobalStyle/>
    <JianshuApp />
  </React.Fragment>), 
  document.getElementById('root')
);
