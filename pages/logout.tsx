import type { NextPage } from 'next'
import { PageWrapper } from '@components/PageWrapper'
import { useUserApi } from '../lib/context/user'
import { useCallback } from 'react'
import { useRouter } from 'next/router'

const LogoutPage: NextPage = () => {
  const { logOut } = useUserApi()
  const router = useRouter()

  const handleLogOut = useCallback(() => {
    logOut()

    return router.push('/')
  }, [])

  return (
    <PageWrapper className="h-screen w-screen flex justify-center flex-col items-center bg-white dark:bg-stone-900">
      <button
        onClick={handleLogOut}
        className="text-white py-2 px-4 uppercase rounded bg-emerald-400 hover:bg-emerald-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
      >
        Sign out
      </button>
    </PageWrapper>
  )
}

export default LogoutPage
