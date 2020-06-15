/** @jsx jsx */
import { useState } from 'react'
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import actionTypes from '../configs/actionTypes'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import FormControl from '../containers/FormControl/FormControl'
import {
  InputEmail,
  InputPassword,
  Button,
  Hyperlink,
  Space,
  Paragraph,
} from '../components'

export default function Login() {
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState({})
  const [loading, setLoading] = useState(false)
  // const router = useRouter()
  const handleSubmit = async (event) => {
    if (event) event.preventDefault()
    // handling calling API
    console.log('handleSubmit', formValue)
    setLoading(true)
    const response = await fetch('http://127.0.0.1:5000/login.json')
    const { user } = await response.json()
    setLoading(false)
    dispatch({
      type: actionTypes.LOGIN,
      logged: true,
      user,
    })
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
              <Button type="submit" widthAll>
                وارد شوید
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
                <Hyperlink href="/forgot">فراموشی کلمه عبور</Hyperlink>
              </Paragraph>
            </div>
          </form>
        </>
      </LayoutAuth>
    </div>
  )
}
