import React, { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTheme, useThemeApi } from 'lib/context/theme'

import {
  LightIcon,
  DarkIcon,
  LightBook,
  DarkBook,
  LightLearn,
  DarkLearn,
  DarkHome,
  LightHome,
} from './icons'

const pages = [
  {
    link: '/',
    darkIcon: <DarkHome />,
    lightIcon: <LightHome />,
  },
  {
    link: '/blog',
    darkIcon: <DarkLearn />,
    lightIcon: <LightLearn />,
  },
  {
    link: '/cv',
    darkIcon: <DarkBook />,
    lightIcon: <LightBook />,
  },
]

const Navigation: React.FC = () => {
  const router = useRouter()

  const { isDark } = useTheme()
  const { toggleTheme } = useThemeApi()

  const isHomePage = router.pathname === '/'

  return (
    <div
      className={`absolute flex justify-between w-full h-[10px] sm:top-6 sm:px-10 px-4 bottom-6 ${
        isHomePage ? 'text-white' : ''
      }`}
    >
      <div className="flex w-full sm:justify-start justify-between">
        {pages.map((page) => (
          <Link href={page.link}>
            <a className="flex justify-center items-center w-6 h-6 sm:mr-10 mr-0">
              {isDark ? page.lightIcon : page.darkIcon}
            </a>
          </Link>
        ))}
        <div className="sm:hidden block" onClick={toggleTheme}>
          {isDark ? <LightIcon /> : <DarkIcon />}
        </div>
      </div>
      <div className="sm:block hidden" onClick={toggleTheme}>
        {isDark ? <LightIcon /> : <DarkIcon />}
      </div>
    </div>
  )
}

export default memo(Navigation)
