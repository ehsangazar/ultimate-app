/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Button = ({
  type = 'button',
  children,
  widthAll,
  disabled,
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
          &:disabled {
            background-color: ${theme.colors.backgroundColorSecondary};
            cursor: no-drop;
          }
        `}
        disabled={disabled || loading}
        type={type}
      >
        {loading && (
          <div
            css={css`
              height: 21px;
              width: 100%;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <img
              alt="loading"
              css={css`
                width: 40px;
                position: absolute;
              `}
              src="assets/img/loading.svg"
            />
          </div>
        )}
        {!loading && children}
      </button>
    </div>
  )
}

export default Button
