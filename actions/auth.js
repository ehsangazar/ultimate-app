import reduxCall from '../utils/reduxCall'
import actionTypes from '../configs/actionTypes'

const VALIDATE_ME_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: '/user/me',
      method: 'GET',
      name: 'VALIDATE_ME',
    })
  }
}
const LOGIN_ACTION = (formValue) => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: '/user/login',
      method: 'POST',
      name: 'LOGIN',
      body: formValue,
    })
  }
}
const REGISTER_ACTION = (formValue) => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: '/user/register',
      method: 'POST',
      name: 'REGISTER',
      body: formValue,
    })
  }
}
const LOGOUT_ACTION = () => {
  return {
    type: actionTypes.LOGOUT,
  }
}

export { LOGIN_ACTION, REGISTER_ACTION, VALIDATE_ME_ACTION, LOGOUT_ACTION }
