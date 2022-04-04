import type { NextPage } from 'next'
import { PageWrapper } from '@components/PageWrapper'
import React from 'react'
import CV from '@modules/CV'

const CVPage: NextPage = () => {
  return (
    <PageWrapper className="min-h-screen w-screen dark:bg-stone-900">
      <CV />
    </PageWrapper>
  )
}

export default CVPage
