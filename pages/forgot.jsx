/** @jsx jsx */
import { useState } from 'react'
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import FormControl from '../containers/FormControl/FormControl'
import {
  InputEmail,
  Button,
  H2,
  Space,
  Paragraph,
  Hyperlink,
} from '../components'

export default function Forgot() {
  const [formValue, setFormValue] = useState({})
  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    console.log('handleSubmit', formValue)
  }
  const handleOnChange = (name, value) => {
    setFormValue({
      ...formValue,
      [name]: value,
    })
  }

  return (
    <div className="container">
      <Head>
        <title>فراموشی کلمه عبور</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutAuth>
        <Space />
        <H2 align="center">فراموش کار شده‌اید؟</H2>
        <>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <InputEmail
                onChange={(value) => handleOnChange('email', value)}
                placeholder="ایمیل"
              />
            </FormControl>
            <FormControl>
              <Button type="submit" widthAll>
                درخواست بازیابی کلمه عبور
              </Button>
            </FormControl>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                margin-top: 16px;
              `}
            >
              <Paragraph>
                <Hyperlink href="/register">ثبت نام کنید</Hyperlink>
              </Paragraph>
              <Paragraph>
                <Hyperlink href="/login">وارد شوید</Hyperlink>
              </Paragraph>
            </div>
          </form>
        </>
      </LayoutAuth>
    </div>
  )
}
