/** @jsx jsx */
import { useState } from 'react'
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import FormControl from '../containers/FormControl/FormControl'
import {
  InputEmail,
  InputPassword,
  Button,
  Space,
  InputText,
  Hyperlink,
  Paragraph,
} from '../components'
import { REGISTER_ACTION } from '../actions'

export default function Register() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [formValue, setFormValue] = useState({})
  const auth = useSelector((state) => state.auth)

  const handleSubmit = (event) => {
    if (event) event.preventDefault()

    // handling calling API
    dispatch(REGISTER_ACTION())
    console.log('handleSubmit', formValue)

    // if success
    // router.push('/')
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
        <title>ثبت‌نام</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutAuth>
        <Space />
        <>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <InputText
                onChange={(value) => handleOnChange('name', value)}
                placeholder="نام"
              />
            </FormControl>
            <FormControl>
              <InputEmail
                onChange={(value) => handleOnChange('email', value)}
                placeholder="ایمیل"
              />
            </FormControl>
            <FormControl>
              <InputPassword
                onChange={(value) => handleOnChange('password', value)}
                placeholder="کلمه عبور"
              />
            </FormControl>
            <FormControl>
              <Button type="submit" widthAll loading={auth.loading}>
                ثبت نام
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
                <Hyperlink href="/login">وارد شوید</Hyperlink>
              </Paragraph>
              <Paragraph>
                <Hyperlink href="/forgot">فراموشی کلمه عبور</Hyperlink>
              </Paragraph>
            </div>
          </form>
        </>
      </LayoutAuth>
    </div>
  )
}
