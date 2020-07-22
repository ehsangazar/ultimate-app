/** @jsx jsx */
import { useState } from 'react'
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import LayoutPage from '../containers/LayoutPage/LayoutPage'
import FormControl from '../containers/FormControl/FormControl'
import {
  InputEmail,
  InputTextArea,
  Button,
  Alert,
  InputText,
  Hyperlink,
  Paragraph,
  H1,
} from '../components'

const Contact = () => {
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState({})
  const auth = useSelector((state) => state.auth)

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
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
        <title>ریموت جابب - کار کردن از راه دور</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutPage>
        <div
          css={css`
            max-width: 700px;
            margin: 30px auto;
          `}
        >
          <H1>تماس با ما</H1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام
          </p>
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
              <InputTextArea
                onChange={(value) => handleOnChange('password', value)}
                placeholder="توضیحات"
              />
            </FormControl>
            <FormControl>
              <Button type="submit" loading={auth.loading}>
                ارسال
              </Button>
            </FormControl>

            {auth.response && <Alert>{auth.response.message}</Alert>}
          </form>
        </div>
      </LayoutPage>
    </div>
  )
}

export default Contact
