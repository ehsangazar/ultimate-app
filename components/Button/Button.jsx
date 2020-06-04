/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Button = ({ type = 'button', children }) => (
  <div
    css={css`
      width: 100%;
    `}
  >
    <button type={type}>{children}</button>
  </div>
)

export default Button
