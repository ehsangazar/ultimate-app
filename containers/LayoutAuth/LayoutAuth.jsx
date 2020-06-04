/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const LayoutAuth = ({ children }) => (
  <div
    css={css`
      display: flex;
      height: 100vh;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `}
  >
    <div>
      <img
        css={css`
          width: 300px;
        `}
        src="logo.png"
      />
      <h2>Ultimate Project</h2>
    </div>
    <div>{children}</div>
  </div>
)

export default LayoutAuth
