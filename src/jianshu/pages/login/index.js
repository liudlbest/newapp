import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography, Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { actionCreators } from './store'
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function Login() {

  const userName = useValueForm('');
  const password = useValueForm('');
  const loginStatus = useSelector( state => state.getIn(['login', 'login']));
  const dispatch = useDispatch();

  const classes = useStyles();
  if(!loginStatus){
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography 
            component="div" 
            style={{ 
              backgroundColor: '#eee', 
              height: '50vh' 
            }} 
            align="center"
          >
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField required 
                  id="standard-required"
                  label="User Name" 
                  placeholder="UserName" 
                  {...userName}
                />
              </div>
              <div>
                <TextField required
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  {...password}
                />
              </div>
              <div>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={()=>dispatch(actionCreators.validPassord(userName.value, password.value))}
                >
                  登录
                </Button>
              </div>
            </form>
          </Typography>
        </Container>
      </React.Fragment>
    );
  } else {
    return <Redirect to="/"></Redirect>
  }
}

const useValueForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}