import React, { memo, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme, useThemeApi } from 'lib/context/theme'

import { Learn, Home } from './icons'
import { useAudio } from '@hooks/useAudio'
import { AudioIcon } from '@components/Navigation/components/audio'
import { LightIcon } from '@components/Navigation/components/light'
import { AuthIcon } from '@components/Navigation/components/auth'

const pages = [
  {
    link: '/',
    icon: <Home />,
  },
  {
    link: '/blog',
    icon: <Learn />,
  },
  // {
  //   link: '/cv',
  //   icon: <Book />,
  // },
]

const Navigation: React.FC = () => {
  const playSound = useAudio('/assets/clicks.wav')
  const router = useRouter()

  const { isDark } = useTheme()
  const { toggleTheme } = useThemeApi()

  const isHomePage = router.pathname === '/'

  const handleThemeToggle = useCallback(() => {
    toggleTheme()
    playSound()
  }, [toggleTheme, playSound])

  return (
    <div
      className={`transition-all fixed flex justify-between items-center w-full mt-2 h-[50px] sm:top-0 sm:px-10 px-4 bottom-0 ${
        isHomePage
          ? 'text-white'
          : 'sm:bg-transparent dark:sm:bg-transparent bg-white dark:bg-stone-900'
      }`}
    >
      <div className="flex w-full sm:justify-start justify-between items-center">
        {pages.map((page) => (
          <Link href={page.link} key={page.link}>
            <a className="flex justify-center items-center w-6 h-6 sm:mr-10 mr-0">
              {page.icon}
            </a>
          </Link>
        ))}
        <div className="sm:hidden block cursor-pointer">
          <AuthIcon />
        </div>
        <AudioIcon isMobile />
        <div className="sm:hidden block">
          <LightIcon isDark={isDark} onClick={handleThemeToggle} />
        </div>
      </div>
      <div className="sm:block hidden mr-10 cursor-pointer">
        <AuthIcon />
      </div>
      <AudioIcon />
      <div className="sm:block hidden">
        <LightIcon isDark={isDark} onClick={handleThemeToggle} />
      </div>
    </div>
  )
}

export default memo(Navigation)
