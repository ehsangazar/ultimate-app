/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { useSelector } from 'react-redux'
import { H3, Hyperlink, Button, Paragraph, Small } from '../../components'

const LayoutPage = ({ children }) => {
  const auth = useSelector((state) => state.auth)
  const theme = useTheme()
  return (
    <div
      css={css`
        max-width: 100%;
      `}
    >
      <div
        css={css`
          background-color: ${theme.colors.backgroundColorPrimary};
        `}
      >
        <div
          css={css`
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
            padding: 16px 0;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <img
              alt="remote-jobb-logo"
              css={css`
                max-width: 100px;
              `}
              src="/logo.png"
            />
            <H3
              css={css`
                height: 15px;
                padding-right: 15px;
                width: 103px;
                text-align: center;
                line-height: 25px;
                text-transform: uppercase;
                color: ${theme.colors.linkPrimary};
              `}
            >
              <Hyperlink
                href="/"
                css={css`
                  border: none;
                `}
              >
                REMOTE JOBB
              </Hyperlink>
            </H3>
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            {(!auth || !auth.logged) && (
              <ul
                css={css`
                  display: flex;
                  li {
                    padding: 0 16px;
                    display: flex;
                    align-items: center;
                  }
                `}
              >
                <li>
                  <Hyperlink
                    css={css`
                      border: none;
                    `}
                    href="/login"
                  >
                    ورود
                  </Hyperlink>
                </li>
                <li>
                  <Hyperlink
                    css={css`
                      border: none;
                    `}
                    href="/register"
                  >
                    <Button href="/register">ثبت نام</Button>
                  </Hyperlink>
                </li>
              </ul>
            )}
            {auth && auth.logged && <div>خوش آمدید , {auth.user.email}</div>}
          </div>
        </div>
      </div>
      <div>
        <div
          css={css`
            width: 100%;
            min-height: 400px;
            background-color: ${theme.colors.backgroundColorDefault};
          `}
        >
          {children}
        </div>
      </div>
      <div
        css={css`
          background-color: ${theme.colors.backgroundColorSecondary};
          width: 100%;
        `}
      >
        <div
          css={css`
            max-width: 1000px;
            margin: 0 auto;
            min-height: 300px;
            padding: 32px 0;
          `}
        >
          <div>
            <H3
              css={css`
                color: white;
                padding-bottom: 16px;
              `}
            >
              ما ریموت کار میکنیم
            </H3>
            <Paragraph
              css={css`
                color: white;
              `}
            >
              ریموت کار کردن استایلی از زندگی است که همراه با انعطاف‌پذیری زیاد،
              فرصت بهره‌وری بیشتر از زمان را می‌دهد. اگر همیشه فکر می‌کردید چرا
              هر روز باید به شرکت بروید، این سایت برای شماست
            </Paragraph>
          </div>
        </div>
      </div>
      <div
        css={css`
          background-color: ${theme.colors.backgroundColorDefault};
          width: 100%;
          padding: 16px 0;
        `}
      >
        <div
          css={css`
            max-width: 1000px;
            margin: 0 auto;
          `}
        >
          <div>
            <ul
              css={css`
                display: flex;
                li {
                  padding: 0 16px;
                }
              `}
            >
              <li>
                <Hyperlink
                  css={css`
                    border: none;
                  `}
                  href="/about"
                >
                  درباره
                </Hyperlink>
              </li>
              <li>
                <Hyperlink
                  css={css`
                    border: none;
                  `}
                  href="/contact"
                >
                  تماس
                </Hyperlink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        css={css`
          background-color: ${theme.colors.backgroundColorPrimary};
          width: 100%;
          padding: 16px 0;
        `}
      >
        <div
          css={css`
            max-width: 1000px;
            margin: 0 auto;
          `}
        >
          <Small>تمامی حقوق متعلق به سایت ریموت‌جابب است</Small>
        </div>
      </div>
    </div>
  )
}

export default LayoutPage
