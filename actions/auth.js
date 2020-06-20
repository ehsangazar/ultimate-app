import reduxCall from '../utils/reduxCall'

const LOGIN_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: '/login.json',
      method: 'GET',
      name: 'LOGIN',
    })
  }
}

const REGISTER_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: '/register.json',
      method: 'GET',
      name: 'REGISTER',
    })
  }
}

export { LOGIN_ACTION, REGISTER_ACTION }
