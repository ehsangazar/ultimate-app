/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Head from 'next/head'

export default function Home() {
  const color = 'white'
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Ultimate Project
        <div
          css={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
              color: ${color};
            }
          `}
        >
          Hover to change color.
        </div>
      </main>
    </div>
  )
}
