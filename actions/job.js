import reduxCall from '../utils/reduxCall'

const GET_LIST_JOB_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: 'http://127.0.0.1:5000/jobs.json',
      method: 'GET',
      name: 'GET_LIST_JOB',
    })
  }
}

export { GET_LIST_JOB_ACTION }
