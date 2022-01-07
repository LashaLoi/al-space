import React, { memo } from 'react'
import Link from 'next/link'

import { useTheme, useThemeApi } from 'lib/context/theme'

import {
  LightIcon,
  DarkIcon,
  LightBook,
  DarkBook,
  LightLearn,
  DarkLearn,
  LightChat,
  DarkChat,
} from './icons'

const Navigation: React.FC = () => {
  const { isDark } = useTheme()
  const { toggleTheme } = useThemeApi()

  return (
    <>
      <div
        onClick={toggleTheme}
        className="absolute sm:right-12 sm:top-6 right-6 bottom-6 cu"
      >
        {isDark ? <LightIcon /> : <DarkIcon />}
      </div>
      <div className="absolute sm:left-12 sm:top-6 left-6 bottom-6 ">
        <Link href="/cv">
          <a>{isDark ? <LightBook /> : <DarkBook />}</a>
        </Link>
      </div>
      <div className="absolute sm:left-24 sm:top-6 left-24 bottom-6">
        <Link href="/blog">
          <a>{isDark ? <LightLearn /> : <DarkLearn />}</a>
        </Link>
      </div>
      <div className="absolute sm:left-36 sm:top-6 right-24 bottom-6">
        {isDark ? <LightChat /> : <DarkChat />}
      </div>
    </>
  )
}

export default memo(Navigation)
