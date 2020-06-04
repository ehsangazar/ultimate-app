/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const LayoutAuth = ({ children }) => (
  <div
    css={css`
      display: flex;
      height: 100vh;
      max-width: 320px;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `}
  >
    <div
      css={css`
        text-align: center;
      `}
    >
      <img
        css={css`
          max-width: 320px;
        `}
        src="logo.png"
      />
    </div>
    <div
      css={css`
        width: 100%;
      `}
    >
      {children}
    </div>
  </div>
)

export default LayoutAuth
