import React, { useCallback } from 'react'
import { useGlobalState, useGlobalStateApi } from 'lib/context/global'
import { AudioOn, AudioOff } from '../icons'
import { useAudio } from '@hooks/useAudio'

interface AudioIconProps {
  isMobile?: boolean
}

export const AudioIcon: React.FC<AudioIconProps> = ({ isMobile = false }) => {
  const playUpAudio = useAudio('/assets/bubble-up.wav', true)
  const playDownAudio = useAudio('/assets/bubble-down.wav', true)

  const { isAudioOn } = useGlobalState()
  const { toggleAudio } = useGlobalStateApi()

  const handleToggle = useCallback(() => {
    isAudioOn ? playUpAudio() : playDownAudio()

    toggleAudio()
  }, [isAudioOn, playDownAudio, playUpAudio, toggleAudio])

  const className = isMobile
    ? 'sm:hidden block'
    : 'sm:block hidden mr-10 cursor-pointer'

  const icon = isAudioOn ? (
    <AudioOn key="dark-audio-on" />
  ) : (
    <AudioOff key="dark-audio-off" />
  )

  return (
    <div className={`${className} cursor-pointer`} onClick={handleToggle}>
      {icon}
    </div>
  )
}
