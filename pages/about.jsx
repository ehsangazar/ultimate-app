/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import LayoutPage from '../containers/LayoutPage/LayoutPage'
import { H1 } from '../components'

const About = () => {
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
            margin: 0 auto;
            margin-top: 30px;
          `}
        >
          <H1>درباره ما</H1>
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
        </div>
      </LayoutPage>
    </div>
  )
}

export default About
