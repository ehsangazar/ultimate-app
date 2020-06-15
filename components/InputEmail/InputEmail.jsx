/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Input from '../Input/Input'

const InputEmail = (props) => (
  <div
    css={css`
      width: 100%;
      direction: ltr;
      &::placeholder {
        direction: rtl;
        color: red;
      }
      input::placeholder {
        direction: rtl;
      }
    `}
  >
    <Input type="email" {...props} />
  </div>
)

export default InputEmail
