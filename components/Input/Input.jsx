/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Input = ({ type = 'text', placeholder }) => (
  <div
    css={css`
      width: 100%;
    `}
  >
    <input type={type} placeholder={placeholder} />
  </div>
)

export default Input
