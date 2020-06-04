import { ThemeProvider } from 'emotion-theming'
import theme from '../configs/theme'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
