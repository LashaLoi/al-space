import React from 'react'
import { useGlobalState, useGlobalStateApi } from 'lib/context/global'
import { AudioOn, AudioOff } from '../icons'

interface AudioIconProps {
  isMobile?: boolean
}

export const AudioIcon: React.FC<AudioIconProps> = ({ isMobile = false }) => {
  const { isAudioOn } = useGlobalState()
  const { toggleAudio } = useGlobalStateApi()

  const className = isMobile
    ? 'sm:hidden block'
    : 'sm:block hidden mr-10 cursor-pointer'

  const icon = isAudioOn ? (
    <AudioOn key="dark-audio-on" />
  ) : (
    <AudioOff key="dark-audio-off" />
  )

  return (
    <div className={`${className} cursor-pointer`} onClick={toggleAudio}>
      {icon}
    </div>
  )
}
