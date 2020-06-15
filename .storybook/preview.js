/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../configs/theme'
import Reset from '../containers/Reset/Reset'

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <div
      css={css`
        max-width: 600px;
        display: flex;
        margin: 20px auto;
        direction: rtl;
      `}
    >
      <Reset />
      {storyFn()}
    </div>
  </ThemeProvider>
))
