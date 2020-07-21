import actionTypes from '../configs/actionTypes'

const auth = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_JOB_STARTED:
      return {
        ...state,
        loading: action.loading,
      }
    case actionTypes.GET_LIST_JOB_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        jobs:
          action.response && action.response.jobs
            ? action.response && action.response.jobs
            : [],
      }
    case actionTypes.GET_LIST_JOB_FAILED:
      return {
        ...state,
        ...action,
      }
    case actionTypes.GET_SINGLE_JOB_STARTED:
      return {
        ...state,
        loading: action.loading,
      }
    case actionTypes.GET_SINGLE_JOB_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        job:
          action.response && action.response.job
            ? action.response && action.response.job
            : [],
      }
    case actionTypes.GET_SINGLE_JOB_FAILED:
      return {
        ...state,
        ...action,
      }
    default:
      return state
  }
}

export default auth
