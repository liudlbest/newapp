import axios from 'axios';
import * as constants from './constants'

const handleLogin = () => ({
  type: constants.LOGIN
})

export const validPassord = (userName, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?username=' + userName + '&password=' + password)
      .then((res) => {
        dispatch(handleLogin());
      })
      .catch( ()=> {
        console.log("valid password error");
      })
  }
}
 
export const handleLogout = () => ({
  type: constants.LOGOUT
})