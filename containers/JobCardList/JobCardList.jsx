/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import JobCard from '../JobCard/JobCard'

const JobCardList = ({ jobs, loading }) => {
  return (
    <div>
      {loading && (
        <div
          css={css`
            height: 21px;
            width: 100%;
            min-height: 300px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <img
            alt="loading"
            css={css`
              width: 40px;
              position: absolute;
            `}
            src="assets/img/loading.svg"
          />
        </div>
      )}
      {!loading &&
        jobs &&
        jobs.map((item) => <JobCard key={`JobCard-${item.id}`} data={item} />)}
    </div>
  )
}
export default JobCardList
