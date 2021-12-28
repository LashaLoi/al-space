import type { NextPage } from 'next'
import Head from 'next/head'

import { Home } from '@modules/Home'

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>AL SPACE</title>
      <meta name="description" content="All info about Aliaksei Loi" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Home />
  </>
)

export default HomePage
