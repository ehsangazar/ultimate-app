/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Button = ({ type = 'button', children }) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <button
        css={css`
          width: 100%;
          background-color: ${theme.colors.primary};
          color: white;
          font-size: ${theme.typography.paragraph};
          text-decoration: none;
          padding: ${theme.spaces[4]};
          border: ${theme.borderRadius[1]};
          border-radius: ${theme.borderRadius[1]};
          display: inline-block;
          position: relative;
          cursor: pointer;
          transition-duration: 0.4s;
          &:hover {
            box-shadow: ${theme.boxShadow.light};
          }
        `}
        type={type}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
