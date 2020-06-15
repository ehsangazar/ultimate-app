/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const H5 = ({ children, align = 'right' }) => {
  const theme = useTheme()
  return (
    <h5
      css={css`
        text-align: ${align};
        font-weight: ${theme.typography.h5.fontWeight};
        line-height: ${theme.typography.h5.lineHeight};
        margin-top: 0;
        font-size: ${theme.typography.h5.fontSize}em;
      `}
    >
      {children}
    </h5>
  )
}

export default H5
