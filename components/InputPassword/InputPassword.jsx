/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Input from '../Input/Input'

const InputPassowrd = ({ placeholder }) => (
  <div
    css={css`
      width: 100%;
    `}
  >
    <Input type="password" placeholder={placeholder} />
  </div>
)

export default InputPassowrd
