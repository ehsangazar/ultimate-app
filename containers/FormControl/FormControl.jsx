/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const FormControl = ({ children }) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        display: flex;
        padding: ${theme.spaces[3]} 0;
      `}
    >
      {children}
    </div>
  )
}

export default FormControl
