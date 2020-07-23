import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Cookies from 'universal-cookie'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const composeEnhancers = composeWithDevTools({
  name: 'jobb',
})

const createMyStore = () => {
  const cookies = new Cookies()
  let logged = false
  let email = ''
  if (cookies.get('logged')) {
    logged = cookies.get('logged')
  }
  if (cookies.get('email')) {
    email = cookies.get('email')
  }
  const store = createStore(
    rootReducer,
    {
      auth: {
        user: {
          email,
        },
        logged,
      },
    },
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}

export default createMyStore
