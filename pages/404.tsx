import type { NextPage } from 'next'
import { PageWrapper } from '@components/PageWrapper'

const NotFoundPage: NextPage = () => (
  <PageWrapper className="h-screen flex justify-center items-center">
    <div className="text-center w-full">
      <div className="">Page not found</div>
    </div>
  </PageWrapper>
)

export default NotFoundPage
