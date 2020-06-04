/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import { InputEmail, InputPassword, Button } from '../components'

export default function Home() {
  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    console.log('handleSubmit')
  }
  return (
    <div className="container">
      <Head>
        <title>ورود</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutAuth>
        <>
          <form onSubmit={handleSubmit}>
            <InputEmail placeholder="ایمیل" />
            <InputPassword placeholder="کلمه عبور" />
            <Button type="submit">ارسال</Button>
          </form>
        </>
      </LayoutAuth>
    </div>
  )
}
