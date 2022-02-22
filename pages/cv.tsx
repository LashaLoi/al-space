import type { NextPage } from 'next'
import { PageWrapper } from '@components/PageWrapper'

const variants = {
  hidden: { opacity: 0, y: -200 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 200 },
}

const CVPage: NextPage = () => (
  <PageWrapper variants={variants} className="sm:pt-[80px] pt-0">
    <div>CV</div>
  </PageWrapper>
)

export default CVPage
