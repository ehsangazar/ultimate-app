/** @jsx jsx */
import { useState } from 'react'
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import FormControl from '../containers/FormControl/FormControl'
import { InputPassword, Button, H2, Space } from '../components'

export default function Reset() {
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
        <title>تغییر کلمه عبور</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutAuth>
        <Space />
        <H2 align="center">تغییر کلمه عبور</H2>
        <>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <InputPassword
                onChange={(value) => handleOnChange('password', value)}
                placeholder="کلمه عبور"
              />
            </FormControl>
            <FormControl>
              <InputPassword
                onChange={(value) => handleOnChange('new-password', value)}
                placeholder="تکرار کلمه عبور"
              />
            </FormControl>
            <FormControl>
              <Button type="submit" widthAll>
                تغییر
              </Button>
            </FormControl>
          </form>
        </>
      </LayoutAuth>
    </div>
  )
}
