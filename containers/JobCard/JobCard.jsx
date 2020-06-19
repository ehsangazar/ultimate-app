/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Small, H5 } from '../../components'

const JobCard = ({ data }) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        padding: 16px 48px 16px 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${theme.colors.backgroundColorPrimary};
        border-radius: ${theme.borderRadius[1]};
        position: relative;
        cursor: pointer;
        transition-duration: 0.4s;
        margin-bottom: 12px;
        &:hover {
          box-shadow: ${theme.boxShadow.light};
          color: white;
          background-color: ${theme.colors.secondary};
          .inside {
            border-color: white;
          }
        }
      `}
    >
      <div>
        <Small>{data.company}</Small>
        <H5>{data.title}</H5>
        <Small>{data.job_type}</Small>
      </div>
      <div
        className="inside"
        css={css`
          min-width: 300px;
          height: 90px;
          transition-duration: 0.4s;
          display: flex;
          align-items: center;
          border-left: ${theme.border[2]} solid;
          border-color: ${theme.borderColor.light};
        `}
      >
        <Small>{data.date}</Small>
      </div>
    </div>
  )
}
export default JobCard
