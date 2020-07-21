/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Alert = ({ children }) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        text-decoration: none;
        border: none;
        color: ${theme.colors.linkPrimary};
        border-color: ${theme.colors.linkPrimary};
        background-color: ${theme.colors.tertiary};
        padding-top: ${theme.spaces[2]};
        padding-bottom: ${theme.spaces[2]};
        padding-right: ${theme.spaces[4]};
        padding-left: ${theme.spaces[4]};
        color: ${theme.colors.white};
        transition-duration: 0.4s;
      `}
    >
      {children}
    </div>
  )
}

export default Alert
