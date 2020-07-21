/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import { useTheme } from 'emotion-theming'
import LayoutPage from '../../containers/LayoutPage/LayoutPage'
import JobCard from '../../containers/JobCard/JobCard'
import { H2 } from '../../components'
import { GET_SINGLE_JOB_ACTION } from '../../actions'

const SingleJob = ({ job, loading }) => {
  const theme = useTheme()
  return (
    <div className="container">
      <Head>
        <title>ریموت جابب - کار کردن از راه دور</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutPage>
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
            {job.title}
          </H2>
          <div>
            {job && (
              <JobCard
                key={`JobCard-${job.id}`}
                data={{
                  title: job.title,
                  job_type: job.job_type,
                  company: job.company.name,
                }}
              />
            )}
          </div>
        </div>
      </LayoutPage>
    </div>
  )
}

SingleJob.getInitialProps = async ({ reduxStore, query }) => {
  await reduxStore.dispatch(GET_SINGLE_JOB_ACTION(query.id))
  const { job } = await reduxStore.getState()
  return {
    loading: job.loading,
    job: job.job,
  }
}

export default SingleJob
