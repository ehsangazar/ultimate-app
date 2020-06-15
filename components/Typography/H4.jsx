/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const H4 = ({ children, align = 'right' }) => {
  const theme = useTheme()
  return (
    <h4
      css={css`
        text-align: ${align};
        font-weight: ${theme.typography.h4.fontWeight};
        line-height: ${theme.typography.h4.lineHeight};
        margin-top: 0;
        font-size: ${theme.typography.h4.fontSize}em;
      `}
    >
      {children}
    </h4>
  )
}

export default H4
