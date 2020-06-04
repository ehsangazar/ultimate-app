/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Input from '../Input/Input'

const InputText = ({ placeholder }) => (
  <div
    css={css`
      width: 100%;
    `}
  >
    <Input type="text" placeholder={placeholder} />
  </div>
)

export default InputText
