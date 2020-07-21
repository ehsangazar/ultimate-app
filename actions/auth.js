import reduxCall from '../utils/reduxCall'

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

export { LOGIN_ACTION, REGISTER_ACTION }
