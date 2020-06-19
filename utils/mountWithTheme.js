import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import renderer from 'react-test-renderer'
import theme from '../configs/theme'

const mountWithTheme = (children) => {
  return renderer.create(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default mountWithTheme
