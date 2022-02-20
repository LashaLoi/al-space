import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useMemo,
} from 'react'

type GlobalStateContext = {}

const GlobalStateContext = createContext<GlobalStateContext>({})

export const GlobalStateProvider: React.FC = ({ children }) => {
  return (
    <GlobalStateContext.Provider value={{}}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export const useGlobalStateContext = () =>
  useContext<GlobalStateContext>(GlobalStateContext)

export const useGlobalState = () => {
  return useMemo(() => ({}), [])
}

export const useGlobalStateApi = () => {
  return useMemo(() => ({}), [])
}
