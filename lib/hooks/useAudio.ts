import { useCallback, useEffect, useRef } from 'react'
import { useGlobalState } from 'lib/context/global'

export const useAudio = (url: string, ignoreLS = false) => {
  const { isAudioOn } = useGlobalState()
  const audioRef = useRef<HTMLAudioElement>()

  useEffect(() => {
    audioRef.current = new Audio(url)

    return () => audioRef.current?.pause()
  }, [])

  return useCallback(() => {
    if (!ignoreLS && !isAudioOn) {
      return
    }

    if (!audioRef.current) {
      return
    }

    if (!audioRef.current.paused) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    audioRef.current.play()
  }, [isAudioOn, ignoreLS, audioRef.current])
}
