import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";

export default function Write() {

  const loginStatus = useSelector( state => state.getIn(['login', 'login']));

  if(loginStatus){
    return (
      <React.Fragment>
        写文章
      </React.Fragment>
    );
  } else {
    return <Redirect to="/login"></Redirect>
  }
}
