import React, { memo, useCallback, useState } from 'react'
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
import { useAudio } from '@hooks/useAudio'
import { AudioIcon } from '@components/Navigation/components/audio'

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
  const playSound = useAudio('/assets/clicks.wav')
  const router = useRouter()

  const { isDark } = useTheme()
  const { toggleTheme } = useThemeApi()

  const isHomePage = router.pathname === '/'

  const handleThemeToggle = useCallback(() => {
    toggleTheme()

    return playSound()
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
              {isDark ? page.lightIcon : page.darkIcon}
            </a>
          </Link>
        ))}
        <AudioIcon isMobile />
        <div className="sm:hidden block" onClick={handleThemeToggle}>
          {isDark ? <LightIcon /> : <DarkIcon />}
        </div>
      </div>
      <AudioIcon />
      <div className="sm:block hidden" onClick={handleThemeToggle}>
        {isDark ? <LightIcon /> : <DarkIcon />}
      </div>
    </div>
  )
}

export default memo(Navigation)
