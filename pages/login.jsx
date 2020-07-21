/** @jsx jsx */
import { useState, useEffect } from 'react'
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import { LOGIN_ACTION } from '../actions'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import FormControl from '../containers/FormControl/FormControl'
import {
  InputEmail,
  InputPassword,
  Button,
  Alert,
  Hyperlink,
  Space,
  Paragraph,
} from '../components'

export default function Login() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [formValue, setFormValue] = useState({})
  const auth = useSelector((state) => state.auth)
  // const router = useRouter()
  const handleSubmit = async (event) => {
    if (event) event.preventDefault()
    dispatch(LOGIN_ACTION(formValue))
  }
  const handleOnChange = (name, value) => {
    setFormValue({
      ...formValue,
      [name]: value,
    })
  }

  useEffect(() => {
    if (
      auth.response &&
      auth.response.user &&
      auth.response.user.access_token
    ) {
      router.push('/')
    }
  }, [auth.response])

  return (
    <div className="container">
      <Head>
        <title>ورود</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutAuth>
        <Space />
        <>
          <form onSubmit={handleSubmit}>
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
                وارد شوید
              </Button>
            </FormControl>
            {auth.response && <Alert>{auth.response.message}</Alert>}
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
                <Hyperlink href="/forgot">فراموشی کلمه عبور</Hyperlink>
              </Paragraph>
            </div>
          </form>
        </>
      </LayoutAuth>
    </div>
  )
}
