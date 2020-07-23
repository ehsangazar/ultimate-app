import reduxCall from '../utils/reduxCall'

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

export { LOGIN_ACTION, REGISTER_ACTION, VALIDATE_ME_ACTION }
