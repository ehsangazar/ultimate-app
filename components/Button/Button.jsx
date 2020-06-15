/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Button = ({
  type = 'button',
  children,
  widthAll,
  buttonType = 'primary',
  loading,
}) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <button
        css={css`
          width: ${widthAll ? '100%' : 'auto'};
          background-color: ${theme.colors[buttonType]};
          color: white;
          font-size: ${theme.typography.paragraph};
          text-decoration: none;
          padding: 16px 24px;
          border: ${theme.border[1]};
          border-radius: ${theme.borderRadius[1]};
          display: inline-block;
          position: relative;
          cursor: pointer;
          transition-duration: 0.4s;
          &:hover {
            box-shadow: ${theme.boxShadow.light};
            background-color: ${theme.colors.secondary};
          }
        `}
        type={type}
      >
        {loading && 'loading'}
        {!loading && children}
      </button>
    </div>
  )
}

export default Button
