import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
  useCallback,
} from 'react'

export const LS_KEY = 'audio-on'

export enum AudioOn {
  YES = 'yes',
  NO = 'no',
}

type GlobalStateContext = {
  isAudioOn: boolean
  toggleAudio: () => void
}

const GlobalStateContext = createContext<GlobalStateContext>({
  isAudioOn: true,
  toggleAudio: () => {},
})

export const GlobalStateProvider: React.FC = ({ children }) => {
  const [isAudioOn, setIdAudioOn] = useState(true)

  useEffect(() => {
    const lsAudioOn = localStorage.getItem(LS_KEY)

    if (lsAudioOn) {
      setIdAudioOn(lsAudioOn === AudioOn.YES)
    }
  }, [])

  const toggleAudio = useCallback(() => {
    setIdAudioOn((isAudioOn) => {
      const newState = !isAudioOn

      localStorage.setItem(LS_KEY, newState ? AudioOn.YES : AudioOn.NO)

      return newState
    })
  }, [])

  return (
    <GlobalStateContext.Provider value={{ isAudioOn, toggleAudio }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export const useGlobalStateContext = () =>
  useContext<GlobalStateContext>(GlobalStateContext)

export const useGlobalState = () => {
  const { isAudioOn } = useGlobalStateContext()

  return useMemo(() => ({ isAudioOn }), [isAudioOn])
}

export const useGlobalStateApi = () => {
  const { toggleAudio } = useGlobalStateContext()

  return useMemo(() => ({ toggleAudio }), [toggleAudio])
}
