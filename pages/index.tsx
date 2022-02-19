import type { NextPage } from 'next'
import { SEOHead } from '@seo/head'
import { Home } from '@modules/Home'
import { PageWrapper } from '@components/PageWrapper'

const HomePage: NextPage = () => (
  <PageWrapper>
    <SEOHead />
    <Home />
  </PageWrapper>
)

export default HomePage
