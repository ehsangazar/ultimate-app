import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'
import theme from '../configs/theme'
import store from '../configs/store'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
