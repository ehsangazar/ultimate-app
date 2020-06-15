import actionTypes from '../configs/actionTypes'

const auth = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOGIN_STARTED:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
        user: action.user,
      }
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        ...action,
      }
    default:
      return state
  }
}

export default auth
