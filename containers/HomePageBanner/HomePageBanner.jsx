/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { H1, Paragraph, Button } from '../../components'

const HomePageBanner = () => {
  const theme = useTheme()
  return (
    <div
      css={css`
        background-color: ${theme.colors.backgroundColorPrimary};
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          max-width: 400px;
          padding: 32px 0;
          margin: 0 auto;
          text-align: center;
          flex-direction: column;
        `}
      >
        <H1
          align="center"
          css={css`
            padding-bottom: 16px;
          `}
        >
          ما ریموت کار میکنیم
        </H1>
        <Paragraph align="center">
          سایت ریموت جابب این امکان را برای شما فراهم می‌کند که با تعداد زیادی
          از مخاطبان خود برای تبلیغات کار ریموت خود در ارتباط باشید.
        </Paragraph>
        <Button buttonType="tertiary">ثبت جاب در ریموت جابب</Button>
      </div>
    </div>
  )
}

export default HomePageBanner
