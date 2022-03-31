import React from 'react'
import Link from 'next/link'
import { Login, LogOut } from '../icons'
import { useUserState } from 'lib/context/user'

export const AuthIcon: React.FC = () => {
  const { user, loading } = useUserState()

  if (loading) {
    return null
  }

  return user ? (
    <Link href="/logout">
      <a>
        <LogOut />
      </a>
    </Link>
  ) : (
    <Link href="/login">
      <a>
        <Login />
      </a>
    </Link>
  )
}
