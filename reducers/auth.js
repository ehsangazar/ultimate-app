import actionTypes from '../configs/actionTypes'

const auth = (state = [], action) => {
  console.log('action', action)
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.user,
        logged: action.logged,
      }
    default:
      return state
  }
}

export default auth
