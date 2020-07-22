/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const InputTextArea = ({ onChange, placeholder }) => {
  const theme = useTheme()

  const handleOnChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div
      css={css`
        width: 100%;
        textarea::placeholder {
          direction: rtl;
        }
      `}
    >
      <textarea
        css={css`
          width: 100%;
          background-color: ${theme.colors.backgroundColorPrimary};
          font-size: ${theme.typography.paragraph};
          text-decoration: none;
          border: ${theme.border[1]} solid;
          border-color: ${theme.borderColor.light};
          padding: ${theme.spaces[4]};
          border-radius: ${theme.borderRadius[1]};
          display: inline-block;
          position: relative;
          min-height: 300px;
          cursor: pointer;
        `}
        autoComplete="new-password"
        onChange={handleOnChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputTextArea
