/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import FormControl from '../containers/FormControl/FormControl'
import { InputEmail, InputPassword, Button, H2, Space } from '../components'

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
        <Space />
        <H2 align="center">به ریموت جابب خوش آمدید</H2>
        <>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <InputEmail placeholder="ایمیل" />
            </FormControl>
            <FormControl>
              <InputPassword placeholder="کلمه عبور" />
            </FormControl>
            <FormControl>
              <Button type="submit">وارد شوید</Button>
            </FormControl>
          </form>
        </>
      </LayoutAuth>
    </div>
  )
}
