import { combineReducers } from 'redux'
import auth from './auth'
import job from './job'

export default combineReducers({
  auth,
  job,
})
