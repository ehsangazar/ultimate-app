import actionTypes from '../configs/actionTypes'

const auth = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        email: action.email,
        logged: action.logged,
      }
    default:
      return state
  }
}

export default auth
