/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Small = ({ children, align = 'right' }) => {
  const theme = useTheme()
  return (
    <span
      css={css`
        text-align: ${align};
        font-weight: ${theme.typography.small.fontWeight};
        line-height: ${theme.typography.small.lineHeight};
        font-size: ${theme.typography.small.fontSize}em;
      `}
    >
      {children}
    </span>
  )
}

export default Small
