import type { NextPage } from 'next'
import { Home } from '@modules/Home'
import { PageWrapper } from '@components/PageWrapper'
import Head from 'next/head'

const HomePage: NextPage = () => (
  <PageWrapper>
    <Head>
      <title>AL SPACE</title>
      <meta name="description" content="All info about Aliaksei Loi" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Home />
  </PageWrapper>
)

export default HomePage
