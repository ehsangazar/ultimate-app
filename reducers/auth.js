import Cookies from 'universal-cookie'
import actionTypes from '../configs/actionTypes'

const auth = (state = [], action) => {
  const cookies = new Cookies()
  let user = {}
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      if (action.response && action.response.user)
        cookies.set('user', JSON.stringify(action.response.user), {
          path: '/',
        })

      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
        response: action.response,
      }
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        ...action,
      }
    case actionTypes.REGISTER_STARTED:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
      }
    case actionTypes.REGISTER_SUCCESS:
      if (action.response && action.response.user)
        cookies.set('user', JSON.stringify(action.response.user), {
          path: '/',
        })
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
        response: action.response,
      }
    case actionTypes.REGISTER_FAILED:
      return {
        ...state,
        ...action,
      }
    case actionTypes.VALIDATE_ME_STARTED:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
      }
    case actionTypes.VALIDATE_ME_SUCCESS:
      if (action.response && action.response.user) {
        user = {
          email: action.response.user.email,
        }
      }
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
        user,
      }
    case actionTypes.VALIDATE_ME_FAILED:
      return {
        ...state,
        ...action,
      }
    case actionTypes.LOGOUT:
      cookies.remove('user')
      cookies.remove('logged')
      cookies.remove('email')
      return {
        ...state,
        logged: false,
        user: {},
      }
    default:
      return state
  }
}

export default auth
