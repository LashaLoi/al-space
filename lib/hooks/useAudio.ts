import { useCallback, useEffect, useRef } from 'react'

export const useAudio = (url: string) => {
  const audioRef = useRef<HTMLAudioElement>()

  useEffect(() => {
    audioRef.current = new Audio(url)

    return () => audioRef.current?.pause()
  }, [])

  return useCallback(() => audioRef.current?.play(), [audioRef.current])
}
