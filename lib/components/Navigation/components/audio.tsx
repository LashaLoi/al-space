import React, { useCallback, useEffect, useState } from 'react'
import {
  DarkAudioOn,
  LightAudioOn,
  DarkAudioOff,
  LightAudioOff,
} from '../icons'
import { useTheme } from 'lib/context/theme'

enum AudioOn {
  YES = 'yes',
  NO = 'no',
}

interface AudioIconProps {
  isMobile?: boolean
}

export const AudioIcon: React.FC<AudioIconProps> = ({ isMobile = false }) => {
  const { isDark } = useTheme()
  const [isAudioOn, setIdAudioOn] = useState(true)

  useEffect(() => {
    const lsAudioOn = localStorage.getItem('audio-on')

    if (lsAudioOn) {
      setIdAudioOn(lsAudioOn === AudioOn.YES)
    }
  }, [])

  const className = isMobile
    ? 'sm:hidden block'
    : 'sm:block hidden mr-10 cursor-pointer'

  const icons = isAudioOn
    ? [
        <DarkAudioOn key="dark-audio-on" />,
        <LightAudioOn key="light-audio-on" />,
      ]
    : [
        <DarkAudioOff key="dark-audio-off" />,
        <LightAudioOff key="light-audio-off" />,
      ]

  const handleClick = useCallback(() => {
    setIdAudioOn((state) => {
      localStorage.setItem('audio-on', !state ? AudioOn.YES : AudioOn.NO)

      return !state
    })
  }, [])

  return (
    <div className={`${className} cursor-pointer`} onClick={handleClick}>
      {isDark ? icons[1] : icons[0]}
    </div>
  )
}
