import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography, Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography 
          component="div" 
          style={{ 
            backgroundColor: '#eee', 
            height: '100vh' 
          }} 
          align="center"
        >
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField required 
                id="standard-required"
                label="User Name" 
                placeholder="UserName" 
              />
            </div>
            <div>
              <TextField required
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </div>
            <div>
              <Button variant="contained" color="primary">登录</Button>
            </div>
          </form>
        </Typography>
      </Container>
    </React.Fragment>
  );
}