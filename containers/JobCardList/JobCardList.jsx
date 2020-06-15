/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import JobCard from '../JobCard/JobCard'

const JobCardList = () => {
  return (
    <div>
      {[0, 1].map((item) => (
        <JobCard data={item} />
      ))}
    </div>
  )
}
export default JobCardList
