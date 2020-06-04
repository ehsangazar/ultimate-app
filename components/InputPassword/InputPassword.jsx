/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Input from '../Input/Input'

const InputPassowrd = ({ placeholder }) => (
  <div
    css={css`
      width: 100%;
      direction: ltr;
    `}
  >
    <Input type="password" placeholder={placeholder} />
  </div>
)

export default InputPassowrd
