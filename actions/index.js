import actionTypes from '../configs/actionTypes'

const LOGIN_ACTION = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.LOGIN_STARTED,
      loading: true,
      logged: true,
    })
    try {
      setTimeout(async () => {
        const response = await fetch('http://127.0.0.1:5000/login.json')
        const { user } = await response.json()
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          logged: true,
          loading: false,
          user,
        })
      }, 1000)
    } catch (e) {
      console.error('error', e)
      dispatch({
        type: actionTypes.LOGIN_FAILED,
        logged: false,
        loading: false,
        error: true,
      })
    }
  }
}

export { LOGIN_ACTION }
