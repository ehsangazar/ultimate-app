/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Input from '../Input/Input'

const InputEmail = ({ placeholder }) => (
  <div
    css={css`
      width: 100%;
    `}
  >
    <Input type="email" placeholder={placeholder} />
  </div>
)

export default InputEmail
