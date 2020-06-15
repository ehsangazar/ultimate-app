/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import { useTheme } from 'emotion-theming'
import LayoutPage from '../containers/LayoutPage/LayoutPage'
import HomePageBanner from '../containers/HomePageBanner/HomePageBanner'
import JobCardList from '../containers/JobCardList/JobCardList'
import { H2 } from '../components'

export default function Home() {
  const theme = useTheme()
  return (
    <div className="container">
      <Head>
        <title>ریموت جابب - کار کردن از راه دور</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutPage>
        <HomePageBanner />
        <div
          css={css`
            display: flex;
            max-width: 1000px;
            padding: 32px 0;
            margin: 0 auto;
            flex-direction: column;
          `}
        >
          <H2
            css={css`
              padding-bottom: 32px;
            `}
          >
            لیست جاب‌ها
          </H2>
          <div>
            <JobCardList />
          </div>
        </div>
      </LayoutPage>
    </div>
  )
}
