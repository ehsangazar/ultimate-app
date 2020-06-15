/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const H1 = ({ children, align = 'right', ...props }) => {
  const theme = useTheme()
  return (
    <h1
      css={css`
        text-align: ${align};
        font-weight: ${theme.typography.h1.fontWeight};
        line-height: ${theme.typography.h1.lineHeight};
        margin-top: 0;
        font-size: ${theme.typography.h1.fontSize}em;
      `}
      {...props}
    >
      {children}
    </h1>
  )
}

export default H1
