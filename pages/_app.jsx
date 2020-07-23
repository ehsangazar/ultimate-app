import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'
import Cookies from 'universal-cookie'
import windowHandler from '../utils/windowHandler'
import theme from '../configs/theme'
import createMyStore from '../configs/store'
import { VALIDATE_ME_ACTION, LOGOUT_ACTION } from '../actions'

const store = createMyStore()

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  appContext.ctx.reduxStore = store
  let cookies = {}
  if (appContext.ctx.req) {
    cookies = new Cookies(appContext.ctx.req.headers.cookie)
  } else {
    cookies = new Cookies()
  }
  windowHandler.cookies = cookies
  if (cookies.get('user')) {
    await store.dispatch(VALIDATE_ME_ACTION())
    if (appContext.ctx.res) {
      const { auth } = await store.getState()
      const { email } = auth.user
      const emailCookie = `email=${email}`
      appContext.ctx.res.setHeader('set-cookie', `${emailCookie}`)
      const loggedCookie = `logged=${auth.logged}`
      appContext.ctx.res.setHeader('set-cookie', `${loggedCookie}`)
    }
  } else {
    if (appContext.ctx.res) {
      const loggedCookie = `logged=false`
      appContext.ctx.res.setHeader('set-cookie', `${loggedCookie}`)
      const emailCookie = `email=`
      appContext.ctx.res.setHeader('set-cookie', `${emailCookie}`)
      const userCookie = `user=`
      appContext.ctx.res.setHeader('set-cookie', `${userCookie}`)
    }
    await store.dispatch(LOGOUT_ACTION())
  }
  const pageProps = await App.getInitialProps(appContext)
  return {
    ...pageProps,
  }
}

export default MyApp
