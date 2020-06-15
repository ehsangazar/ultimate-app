/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const H3 = ({ children, align = 'right', ...props }) => {
  const theme = useTheme()
  return (
    <h3
      css={css`
        text-align: ${align};
        font-weight: ${theme.typography.h3.fontWeight};
        line-height: ${theme.typography.h3.lineHeight};
        margin-top: 0;
        font-size: ${theme.typography.h3.fontSize}em;
      `}
      {...props}
    >
      {children}
    </h3>
  )
}

export default H3
