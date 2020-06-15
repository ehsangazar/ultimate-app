/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Input from '../Input/Input'

const InputText = (props) => (
  <div
    css={css`
      width: 100%;
    `}
  >
    <Input type="text" {...props} />
  </div>
)

export default InputText
