/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Input = ({ type = 'text', placeholder }) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <input
        css={css`
          width: 100%;
          background-color: ${theme.colors.backgroundColorPrimary};
          font-size: ${theme.typography.paragraph};
          text-decoration: none;
          border: ${theme.borderRadius[1]} solid;
          border-color: ${theme.borderColor.light};
          padding: ${theme.spaces[4]};
          border-radius: ${theme.borderRadius[1]};
          display: inline-block;
          position: relative;
          cursor: pointer;
        `}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
